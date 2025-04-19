interface ContactFormData {
    name: string
    email: string
    phone: string
    inquiryType: string
    message: string
  }
  
  // In a real application, this would use a backend API or service like EmailJS
  export const sendContactEmail = async (data: ContactFormData): Promise<void> => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // For demo purposes, we'll log the data and resolve the promise
        console.log("Email data:", data)
  
        // In a real application, you would send this data to your backend
        // or use a service like EmailJS to send the email directly
  
        // EmailJS example (commented out):
        // return emailjs.send(
        //   "service_id",
        //   "template_id",
        //   {
        //     from_name: data.name,
        //     reply_to: data.email,
        //     phone: data.phone,
        //     inquiry_type: data.inquiryType,
        //     message: data.message,
        //   },
        //   "user_id"
        // );
  
        // Simulate success (90% of the time)
        if (Math.random() > 0.1) {
          resolve()
        } else {
          reject(new Error("Failed to send email"))
        }
      }, 1500)
    })
  }
  