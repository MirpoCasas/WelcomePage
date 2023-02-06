import movieFinderPic from "../icons/MovieFinder.png";
import stackPic from "../icons/StackOverflow_Questions.png";
import blackgithub from "../icons/github.png";
import docslogo from "../icons/docs.svg";

function Projects(props) {
	if (props.lang === "English") {
		return (
			<section id="Proyects" className="Projects pagePart">
				<h2 className="partTitle">Projects</h2>
				<div className="Projects_item">
					<h3>This Page!</h3>
					<p>
						This website is built on React. You can see the source code and
						previous versions on Github
					</p>
					<a
						href="https://github.com/MirpoCasas/WelcomePage"
						rel="noreferrer"
						target="_blank"
					>
						<button>
							Source Code
							<img className="buttonImg" src={blackgithub} alt="github"></img>
						</button>
					</a>
				</div>
				<div className="Projects_item">
					<h3>Bootcamp Notebook</h3>
					<p>
						As part of Airont Labs' bootcamp, I prepared a notebook with all the
						topics covered and I added things I thought were necesary to
						understand the concepts explained.
					</p>
					<a
						href="https://docs.google.com/document/d/1Da0-qGxoRTieJUleRJnHSkkc8AJ8JqqxhDF5RBbGgvE/edit?usp=sharing"
						rel="noreferrer"
						target="_blank"
					>
						<button>
							See Notebook
							<img className="buttonImg" src={docslogo} alt="docs"></img>
						</button>
					</a>
				</div>
				<div className="Projects_item">
					<h3>MovieFinder</h3>
					<img
						src={movieFinderPic}
						alt="MovieFinder"
						className="ProjectPic"
					></img>
					<p>
						This is the first out of two projects from Airont Labs’ Bootcamp.
						It’s a movie index with a login page, search functionality, trailer
						display, etc. It’s built using vanilla JS, HTML & CSS. It also uses
						JSON SV for logins.
					</p>
					<div className="Projects_buttoncont">
						<a
							href="https://github.com/MirpoCasas/Airont-Labs-Project-One"
							rel="noreferrer"
							target="_blank"
						>
							<button>
								Source Code{" "}
								<img className="buttonImg" src={blackgithub} alt="github"></img>
							</button>
						</a>
						<a
							href="https://moviefinder-mc.vercel.app"
							rel="noreferrer"
							target="_blank"
						>
							<button>
								See on .vercel
							</button>
						</a>
					</div>
				</div>
				<div className="Projects_item">
					<h3>StackExchange Questions</h3>
					<img
						src={stackPic}
						alt="stack exchange questions"
						className="ProjectPic"
					></img>
					<p>
						This was an interview project. It’s a website that fetches questions
						from Stack Exchange and displays them on a grid from Material UI.
						It’s built using React + Typescript
					</p>
					<a
						href="https://github.com/MirpoCasas/StackOverflow-Questions-Grid"
						rel="noreferrer"
						target="_blank"
					>
						<button>
							Source Code{" "}
							<img className="buttonImg" src={blackgithub} alt="github"></img>
						</button>
					</a>
				</div>
			</section>
		);
	} else {
		return (
			<section id="Proyects" className="Projects pagePart">
				<h2 className="partTitle">Proyectos</h2>
				<div className="Projects_item">
					<h3>Esta Pagina!</h3>
					<p>
						Esta pagina fue hecha con React. Se puede acceder al codigo fuente y
						las versiones previas en Github
					</p>
					<a
						href="https://github.com/MirpoCasas/WelcomePage"
						rel="noreferrer"
						target="_blank"
					>
						<button>
							Codigo fuente
							<img className="buttonImg" src={blackgithub} alt="github"></img>
						</button>
					</a>
				</div>
				<div className="Projects_item">
					<h3>Bootcamp Notebook</h3>
					<p>
						Como parte del bootcamp de Airont Labs, prepare un Notebook con todo
						lo que revisamos dentro del programa e inclui cosas que me
						parecieron necesarias para coprender los conceptos explorados.
					</p>
					<a
						href="https://docs.google.com/document/d/1Da0-qGxoRTieJUleRJnHSkkc8AJ8JqqxhDF5RBbGgvE/edit?usp=sharing"
						rel="noreferrer"
						target="_blank"
					>
						<button>
							Ver Notebook
							<img className="buttonImg" src={docslogo} alt="docs"></img>
						</button>
					</a>
				</div>
				<div className="Projects_item">
					<h3>MovieFinder</h3>
					<img
						src={movieFinderPic}
						alt="MovieFinder"
						className="ProjectPic"
					></img>
					<p>
						Este fue el primero de dos projectos para el Bootcamp de Airont
						Labs. Es una pagina buscadora de peliculas, con recomendaciones,
						trailers, etc. Fue hecha usando HTML, CSS y Vainilla JS. Ademas se
						uso JSON SV para la funcionalidad de Log in.
					</p>
					<a
						href="https://github.com/MirpoCasas/Airont-Labs-Project-One"
						rel="noreferrer"
						target="_blank"
					>
						<button>
							Codigo fuente
							<img className="buttonImg" src={blackgithub} alt="github"></img>
						</button>
					</a>
					<a
						href="https://moviefinder-mc.vercel.app"
						rel="noreferrer"
						target="_blank"
					>
						<button>Ver en Vercel</button>
					</a>
				</div>
				<div className="Projects_item">
					<h3>StackExchange Questions</h3>
					<img
						src={stackPic}
						alt="stack exchange questions"
						className="ProjectPic"
					></img>
					<p>
						Esto fue un projecto para una entrevista. Es una pagina que busca
						las preguntas de StackExchange y las visiviliza en una planilla de
						Material UI. Esta hecha usando Typescript + React.
					</p>
					<a
						href="https://github.com/MirpoCasas/StackOverflow-Questions-Grid"
						rel="noreferrer"
						target="_blank"
					>
						<button>
							Codigo Fuente{" "}
							<img className="buttonImg" src={blackgithub} alt="github"></img>
						</button>
					</a>
				</div>
			</section>
		);
	}
}

export default Projects;
