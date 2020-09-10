Feature: Performing a login

    As a user on the phptravels login page
    I want to login
    Because I want to book the ticket

    Background:

        Given I am on the herokuapp login page

    Scenario Outline: Performing login operation with passing test data as data table
        When I login with username and password <user> <password> into the text box
        Then I should see the message "Welcome to the Secure Area. When you are done click logout below." on the landing page

        Examples:
        |user| |password|
        |"tomsmith"| |"SuperSecretPassword!"|
