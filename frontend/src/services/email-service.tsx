import emailjs from "emailjs-com";

interface ContactFormData {
    name: string
    email: string
    phone: string
    inquiryType: string
    message: string
}

// In a real application, this would use a backend API or service like EmailJS
export const sendContactEmail = async (data: ContactFormData): Promise<void> => {
    try {
        const response = await emailjs.send(
            "service_t4asu9k",  // Replace with your EmailJS service ID
            "template_e6t626d", // Replace with your EmailJS template ID
            {
                from_name: data.name,
                reply_to: data.email,
                phone: data.phone,
                inquiry_type: data.inquiryType,
                message: data.message,
            },
            "HiRAa3OlmUZ28A2wU" // Replace with your EmailJS user ID
        )
        console.log("Email sent successfully:", response)
    } catch (error) {
        console.error("Failed to send email:", error)
        throw new Error("Failed to send email")
    }
}
