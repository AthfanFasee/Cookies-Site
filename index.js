

// Creat Cookie
const createCookies = () => {
    const key = document.getElementById("createInputKey").value
    const value = document.getElementById("createInputValue").value
    const createDate = document.getElementById("createDate").value
    
    const y = Number(createDate.slice(0,4))
    const m = Number(createDate.slice(5,7))-1
    const d = Number(createDate.slice(8,10))  
    const expiryDate = new Date(y, m, d).toUTCString()

    document.cookie = `${key}=${value}; expires=${expiryDate}; path=/` 
}

// Update Cookie
const updateCookies = () => {
    const key = document.getElementById("updateInputKey").value
    const value = document.getElementById("updateInputValue").value
    const createDate = document.getElementById("updateDate").value
    
    const y = Number(createDate.slice(0,4))
    const m = Number(createDate.slice(5,7))-1
    const d = Number(createDate.slice(8,10))  
    const expiryDate = new Date(y, m, d).toUTCString()

    document.cookie = `${key}=${value}; expires=${expiryDate}; path=/` 
}

// Delete Cookie
const deleteCookies = () => {
    const key = document.getElementById("deleteInput").value
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
} 

// Display Cookies
const displayCookies = () => {
    const displayElement = document.getElementById("display")
    displayElement.classList.add("displaycookies");
    displayElement.innerText = document.cookie

}












