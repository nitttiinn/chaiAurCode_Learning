# Task(Creating a Rough Database for notepad)

## User: 
    userid String pk
    username String
    email String
    password String
    phonenumber String
    created_at Timestamp
    updated_at Timestamp

## note:
    note_id String pk
    title String
    color String
    userid String fk
    created_at TimeStamp
    updated_at TimeStamp

## subnote:
    subnote_id String pk
    note_id(parentID) String fk
    title String
    desc String
    content String
    status String 
    content String
    created_at TimeStamp
    updated_at TimeStamp