const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white py-10 text-center">
      <h2 className="text-2xl font-semibold">Let’s Connect</h2>

      <div className="flex gap-6 justify-center mt-4">
        <a href="tel:+918076569257">📞</a>
        <a href="mailto:savarnutkarsh@gmail.com">📧</a>
        <a href="https://github.com/US7103">🐙</a>
        <a href="https://www.linkedin.com/in/utkarsh-savarn-6620681aa/">🔗</a>
      </div>

      <p className="text-gray-400 mt-6 text-sm">
        © {new Date().getFullYear()} — Developed By Utkarsh Savarn
      </p>
    </footer>
  );
};

export default Footer;


