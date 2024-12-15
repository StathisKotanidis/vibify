function LoginPage() {
  return (
    <div>
      <div>Welcome back, #NAME</div>
      <form>
        <label htmlFor="">How are you feeling today???</label>
        <input
          type="text"
          placeholder="Tell us how are you feeling right now..."
        ></input>
      </form>
    </div>
  );
}

export default LoginPage;
