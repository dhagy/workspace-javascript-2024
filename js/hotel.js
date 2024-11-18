// test object
var test = {
    fname: "Dylan",
    lname: "Hagy",
    age: 34,
    display: function() {
        console.log("in function")
        return this.fname + " " + this.lname; 
    }
};
console.log(test.display());

// hotel reservation
var guestgroup = new Array();
$('#submit').click(reservation);
function reservation() {
    var guest = {
        name: $('#name').val(),
        checkin: $('#checkin').val(),
        // complete this
        checkout: $('#checkout').val(),
        numberOfGuests: $('#number').val(),
        roomType: $('#room').val(),
    }
    alert(guest.name + " Reserve a Room");
    guestgroup.push(guest);
    console.log(guestgroup);
}