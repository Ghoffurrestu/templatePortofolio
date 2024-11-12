function ToggleDetail(e) {
    const target = $(e.target)

    if ($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active")
    } else {
        $(target).html("less Info").addClass("active")
    }

    // $(target).html("less Info").addClass("active")

    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")

    $(detail).slideToggle()
}

function formSubmit(e) {
    e.preventDefault()

    const email = $("#inp_email")
    const subject = $("#inp_subject")
    const message = $("#inp_message")

    if (!$(email).val()) {
        alert("email required")
    } else if (!$(subject).val()) {
        alert("subject required")
    } else if (!$(message).val()) {
        alert("Mesagge required")
    } else {
        alert(" Form Submited")
        $(email).val("")
        $(subject).val("")
        $(message).val("")
    }
}