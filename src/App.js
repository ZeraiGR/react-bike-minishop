

function App() {
  return (
    <div className="wrapper">
			<header className="header">
					<nav className="header__nav">
						<a className="logo" href="#">
							<img src="/img/logo.png" alt="logo" />
							
							<div className="logo__title">
								<strong>REACT SNEAKERS</strong>
								<span>Магазин лучших кроссовок</span>
							</div>
						</a>
						<ul className="header__menu">
							<li>
								<button className="header__cart" type="button">
									
									1205 руб.
							 	</button>
							</li>
							 <li>
									<a className="header__link header__link--favorite" href="#">
										<span className="sr-only">Избранное</span>
									</a>
							 </li>
							 <li>
									<a className="header__link header__link--user" href="#">
										<span className="sr-only">Профиль</span>
									</a>
							 </li>
						</ul>
					</nav>
			</header>

			<section className="promo">
				<div className="promo__container">

				</div>
			</section>
    </div>
  );
}

export default App;
