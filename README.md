# Lab 8 - Starter

## 1)Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

> 1.Within a Github action that runs whenever code is pushed because by testing a small part, we can check and find the bug more easily. It's easy to solve the problem.

## 2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)

> No, Unit test is enough to check if a function is returning the correct output. Since it makes sure each part of your code is functioning as it should.

## 3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
> No, sending a message to another user is not simple to test it, so unit test is not appropriate for this.

## 4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
> Yes, this is just for checking max message length, so unit test is enough.