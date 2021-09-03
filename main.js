function detectCompType() {
    const mobile = navigator.userAgentData.mobile;
    document.getElementById("bool").innerText = mobile
}

detectCompType()