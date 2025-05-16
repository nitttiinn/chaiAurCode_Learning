# Book Management System

## Tables:

- User:
    - profilePictureURL
    - userId
    - userName
    - name
    - email
    - phonenumber
    - password
    - role[USER, ADMIN]
    - address
    - createdAt
    - updatedAt

- Books:
    - bookId
    - title
    - categoryId
    - language
    - ISBN_NUMBER
    - publisher
    - price
    - authorId
    - stockCount

- Author:
    - authorId
    - authorName
    - authorTwitter
    - authorInstagram
    - authorFacebook
    - List[Books]

- Categories
    - categoryId 
    - categoryName

- BookRecords: 
    - borrowId
    - userId
    - bookId
    - status
    - fine
    - issueDateTime(createdAt)
    - returnDateTime(updatedAt)
    

