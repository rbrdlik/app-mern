export const getAllProducts =  async () => {
    const req = await fetch("http://localhost:3000/product", {
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

export const getProductById =  async (id) => {
    const req = await fetch(`http://localhost:3000/product/${id}`, {
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

export const createProduct =  async (formData) => {
    const req = await fetch(`http://localhost:3000/product`, {
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

export const updateProduct =  async (id, formData) => {
    const req = await fetch(`http://localhost:3000/product/${id}`, {
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

export const deleteProduct =  async (id) => {
    const req = await fetch(`http://localhost:3000/product/${id}`, {
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