NestJS Backend for User and Document Management
Overview
This project is a NestJS backend service designed to manage user authentication, document management, and ingestion controls. It provides a secure and efficient way to handle user roles, document CRUD operations, and trigger ingestion processes in a Python backend. The application is built using TypeScript and follows a microservices architecture.

Features
Authentication & Authorization: Secure APIs using JWT for authentication and role-based access control (admin, editor, viewer).
User Management: Admins can manage users, assign roles, and control permissions.
Document Management: Perform CRUD operations on documents, including secure upload capabilities.
Ingestion Trigger: Trigger external ingestion processes through an API call to the Python backend.
Unit Tests: Comprehensive unit tests for all modules using Jest.
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
Login with JWT token generation.
Logout functionality to invalidate tokens.
Middleware for role-based access control.
2. User Management Module
Purpose: Provides admin-only functionalities for managing users.
Key Features:
List all users with their roles and permissions.
Update user roles and permissions.
Delete users from the system.
Secure endpoints accessible only by admin users.
3. Document Management Module
Purpose: Manages document-related operations.
Key Features:
Create, read, update, and delete (CRUD) operations for documents.
Secure document upload functionality.
Retrieve documents based on user roles and permissions.
Store document metadata in the database.
4. Ingestion Trigger Module
Purpose: Facilitates triggering the ingestion process in the Python backend.
Key Features:
API endpoint to trigger ingestion processes.
Logging and tracking of ingestion requests.
