// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IAdminAuth {
    struct AdminPermissions {
        bool canGrantRoles;
        bool canUpdateContract;
        bool canPause;
    }
    
    function hasRole(bytes32 role, address account) external view returns (bool);
    function getAdminData(address admin) external view returns (uint256 appointedAt, bool canGrantRoles, bool canUpdateContract, bool canPause);
}