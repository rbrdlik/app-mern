﻿export const getAllBooks =  async () => {
    const req = await fetch("http://localhost:3000/book", {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "GET"
    });
    const data = await req.json();
    return {
        status: req.status,
        message: data.message,
        payload: data.payload
    }
}

export const getBookById =  async (id) => {
    const req = await fetch(`http://localhost:3000/book/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "GET"
    });
    const data = await req.json();
    return {
        status: req.status,
        message: data.message,
        payload: data.payload
    }
}

export const createBook =  async (formData) => {
    const req = await fetch(`http://localhost:3000/book`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(formData)
    });
    const data = await req.json();
    return {
        status: req.status,
        message: data.message,
        payload: data.payload
    }
}

export const updateBook =  async (id, formData) => {
    const req = await fetch(`http://localhost:3000/book/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify(formData)
    });
    const data = await req.json();
    return {
        status: req.status,
        message: data.message,
        payload: data.payload
    }
}

export const deleteBook =  async (id) => {
    const req = await fetch(`http://localhost:3000/book/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "DELETE"
    });
    const data = await req.json();
    return {
        status: req.status,
        message: data.message,
        payload: data.payload
    }
}