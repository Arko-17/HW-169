AFRAME.registerComponent("markerhandler", {
    init: async function () {
        this.el.addEventListener("markerFound", () => {
            console.log("Marker is Found!")
            this.handleMarkerFound()
        })
        this.el.addEventListener("markerLost", () => {
            console.log("Marker is Lost!")
            this.handleMarkerLost()
        })
    },
    handleMarkerFound: function() {
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "flex";
        var ratingButton = document.getElementById("rating-button")
        var orderButton = document.getElementById("order-button")
        ratingButton.addEventListener("click", () => {
            swal({
                icon: "warning",
                title: "Rate Object",
                text: "Work in Progress"
            })
        })
        orderButton.addEeventListener("click", () => {
            swal({
                icon: "https://i.imgur.com/4NZ6uLY.jpg",
                title: "Thank you for your Order", 
                text: "Your order has been dispatched"
            })
        })
    },
    handleMarkerLost: function() {
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "none"
    } 
})