// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract MyContract {
    uint private value;

    function setValue(uint newValue) public {
        value = newValue;
    }

    function getValue() public view returns (uint) {
        return value;
    }
}