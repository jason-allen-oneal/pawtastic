export default function Contact() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between lg:flex text-center">
        <img src={'/images/contact.jpg'} alt="page image" />
        <h2>Contact Us</h2>
        
        <div>
          <table className="table table-xs">
            <tbody>
              <tr>
                <td>Phone #</td>
                <td>(828) 455-3145</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>wherefurmeetslove@yahoo.com</td>
              </tr>
              <tr>
                <td>Facebook</td>
                <td><a href="https://www.facebook.com/Pawtastic-Pet-Camp-101830115872163/">Pawtastic Pet Camp</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
