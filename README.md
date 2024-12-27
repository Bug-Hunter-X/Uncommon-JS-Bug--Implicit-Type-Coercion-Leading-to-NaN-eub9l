# Uncommon JavaScript Bug: Implicit Type Coercion Leading to NaN

This repository demonstrates a subtle bug in JavaScript related to implicit type coercion and its impact on arithmetic operations.  The bug arises when a function performs addition without explicitly handling non-numeric input types. 

## Bug Description

The `foo` function attempts to handle null input values gracefully by returning null if either `a` or `b` is null. However, it fails to account for cases where `a` or `b` might be a string or another non-numeric type.  When such a non-numeric value is used in addition, JavaScript attempts implicit type coercion, resulting in NaN (Not a Number). This can lead to unexpected behavior and difficult-to-debug errors in applications.

## Bug Solution

The solution is to implement robust type checking before performing arithmetic operations.  The improved code validates the input types and handles cases where the inputs are non-numeric or null, producing more predictable results.