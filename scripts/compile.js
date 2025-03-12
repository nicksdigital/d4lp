
const path = require('path');
const fs = require('fs-extra');
const solc = require('solc');

// Make sure the abis directory exists
const abiDir = path.resolve(__dirname, '../contracts/abis');
fs.ensureDirSync(abiDir);

// Read the Degen4LifeController contract (as an example to start with)
const contractPath = path.resolve(__dirname, '../contracts/Degen4LifeController.sol');
const source = fs.readFileSync(contractPath, 'utf8');

// Find all imports and copy them to a temporary directory
function findImports(importPath) {
  let fullPath;
  
  // Handle @openzeppelin imports
  if (importPath.startsWith('@openzeppelin')) {
    fullPath = path.resolve(__dirname, '../node_modules', importPath);
  } else {
    // Handle relative imports
    fullPath = path.resolve(path.dirname(contractPath), importPath);
  }
  
  if (fs.existsSync(fullPath)) {
    return { contents: fs.readFileSync(fullPath, 'utf8') };
  } else {
    return { error: 'File not found' };
  }
}

// Configure Solidity compiler input
const input = {
  language: 'Solidity',
  sources: {
    'Degen4LifeController.sol': {
      content: source
    }
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['abi', 'evm.bytecode']
      }
    }
  }
};

// Compile the contract
console.log('Compiling contracts...');
const output = JSON.parse(solc.compile(JSON.stringify(input), { import: findImports }));

// Check for errors
if (output.errors) {
  output.errors.forEach(error => {
    console.error(error.formattedMessage);
  });
}

// Create a basic D4LWhitelist ABI for now
const whitelist = {
  abi: [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "isWhitelisted",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "signature",
          "type": "bytes"
        }
      ],
      "name": "whitelistUser",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
};

// Write the whitelist ABI for now
fs.writeFileSync(
  path.resolve(abiDir, 'D4LWhitelist.json'),
  JSON.stringify(whitelist, null, 2)
);

console.log('Generated D4LWhitelist.json ABI in contracts/abis');

// Process outputs for other contracts if available
if (output.contracts) {
  for (const contractFile in output.contracts) {
    for (const contractName in output.contracts[contractFile]) {
      console.log(`Writing ${contractName}.json ABI to contracts/abis`);
      
      fs.writeFileSync(
        path.resolve(abiDir, `${contractName}.json`),
        JSON.stringify({ abi: output.contracts[contractFile][contractName].abi }, null, 2)
      );
    }
  }
}

console.log('Compilation complete!');
