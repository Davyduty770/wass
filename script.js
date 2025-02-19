document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form")

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = contactForm.elements["name"].value
    const email = contactForm.elements["email"].value
    const message = contactForm.elements["message"].value

    // Here you would typically send the form data to a server
    // For this example, we'll just log it to the console
    console.log("Form submitted:", { name, email, message })

    // Clear the form
    contactForm.reset()

    // Show a success message
    alert("Thank you for your message! I will get back to you soon.")
  })

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })
})

