import "../Estilos/Inicio.css";

function Inicio() {
  return (
    <main>
      <div className="container1">
        <div className="left">
          <h1>¡Que gusto volverte a ver!</h1>
        </div>
        <div className="right">
          <div className="botonderecha">
          <button type="button " className="admin">
            Regresar
          </button>

          </div>
          
          <div className="centerform">
            <div className="backgroudform">
              <main class="form-signin w-100 m-auto">
                <form>
                  <h1 class="h3 mb-3 fw-normal">Iniciar sesion</h1>
                  <div class="form-floating ">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div class="form-floating mt-3">
                    <input
                      type="password"
                      class="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label for="floatingPassword">Password</label>
                  </div>

                  <div class="checkbox mb-2">
                    <label>
                      <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                  </div>
                  <div class="mb-3">
                    <a href="#" class="link-dark">
                      ¿Olvidaste tu contraseña?
                    </a>
                    <button
                      class="w-100 btn btn-lg btn-danger mt-3"
                      type="submit"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </main>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Inicio;
