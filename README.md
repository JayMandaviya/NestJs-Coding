NestJS Backend for User and Document Management

Overview

This project is a NestJS backend service designed to manage user authentication, document management, and ingestion controls. It provides a secure and efficient way to handle user roles, document CRUD operations, and trigger ingestion processes in a Python backend. The application is built using TypeScript and follows a microservices architecture.

Features

Authentication & Authorization

Secure APIs using JWT for authentication.

Role-based access control with roles such as admin, editor, and viewer.

User Management

Admins can manage users, assign roles, and control permissions.

Document Management

Perform CRUD operations on documents.

Includes secure upload capabilities and metadata storage.

Ingestion Trigger

Trigger external ingestion processes through an API call to the Python backend.

Unit Tests

Comprehensive unit tests for all modules using Jest to ensure system reliability and robustness.

Technologies Used

NestJS: Framework for building the backend API.

TypeORM: ORM for database integration with MySQL.

JWT: For secure authentication and role-based authorization.

Jest: For unit testing.

MySQL: Relational database for data storage.

Axios: For making HTTP requests to the ingestion backend.

Modules

1. Authentication Module

Purpose: Handles user registration, login, and logout functionalities.

Key Features:

User registration with role assignment.

Login with JWT token generation for secure access.

Logout functionality to invalidate active tokens.

Middleware for enforcing role-based access control on APIs.

2. User Management Module

Purpose: Provides admin-only functionalities for managing users.

Key Features:

List all users with their roles and permissions.

Update user roles and permissions dynamically.

Delete users from the system securely.

Endpoints accessible only to admin users for enhanced security.

3. Document Management Module

Purpose: Manages document-related operations.

Key Features:

Full CRUD operations for documents.

Secure upload functionality to protect sensitive data.

Retrieve documents based on user roles and permissions.

Store and manage document metadata in the database for better organization.

4. Ingestion Trigger Module

Purpose: Facilitates triggering the ingestion process in the Python backend.

Key Features:

API endpoint to trigger ingestion processes manually or via automation.

Logging and tracking of all ingestion requests for monitoring and troubleshooting.

Test Cases Execution

Unit Testing

All modules are tested comprehensively using Jest to ensure their functionality and reliability.

Authentication Module Test Cases:

User registration with valid and invalid data.

Login functionality with correct and incorrect credentials.

User Management Module Test Cases:

Verify user listing with roles and permissions.

Role updates for existing users.

Document Management Module Test Cases:

Create, read, update, and delete operations for documents.

Test secure upload for document handling.

Verify document retrieval based on user roles.

Ingestion Trigger Module Test Cases:

Trigger ingestion process and validate responses.

Conclusion

This NestJS backend offers a robust and modular architecture for user and document management. Its integration with a Python backend for ingestion processes, combined with comprehensive testing, ensures reliability, scalability, and security for enterprise-grade applications.

