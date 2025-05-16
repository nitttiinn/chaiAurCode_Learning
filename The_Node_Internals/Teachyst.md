# LMS

## Tables: 
- User
    - userId
    - username (required && unique)
    - bio
    - firstName required
    - middleName optional
    - lastName optional
    - emailId
    - DOB
    - phoneNumber
    - password
    - RoleId (FK to a )
    - courseId
    - address
    - isVerified
    - isActive
    - lastLoginAt
    - createdAt
    - updatedAt

- Roles: 
    - id
    - roleName ['Guest', 'User','Admin','TA','Educator']
    
- Courses
    - rating
    - courseId
    - categoryId
    - courseName
    - languageId
    - teacherId
    - description 
    - level ["Beginner", "Intermediate", "Advance"]
    - statusId (Id from Status)
    - createdAt
    - updatedAt

- lessons
    - Id
    - Tittle
    - teacherId
    - courseId
    - Desc
    - status (Id from Status)
- Enrollments
    - enrollmentId
    - courseId (FK to course table)
    - userId (FK to user table)
    - StatusId (FK)

- Status
    - Id (PK) (FK for lessons, courses, enrollments)
    - RefId
    - RefName ['Courses', 'Lessons', 'Enrollment']
    - statusTitle['DRAFT', 'PUBLISHED', 'ARCHIVED', 'UNDER_REVIEW', 'SCHEDULED','ENROLLED', 'COMPLETED', 'CANCELLED']
- Transactions
    - id
    - userId
    - courseId
    - paymentGateway
    - paymentType ['UPI','Net Banking', 'EMI']
    - amount
    - date
- Coupons
    - id
    - code
    - courseId (FK)
    - discountType
    - value
    - startDate
    - ExpiryDate
    - createdAt

- Category
    - categoryId
    - categoryName