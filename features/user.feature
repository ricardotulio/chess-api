Feature: Creating an account
  As a guest
  I want to create account
  So that I can access as a user

  Scenario: Creating account
    Given a username john.snow
    And a password 123456
    When I submit the new user information
    Then the new account must be created
