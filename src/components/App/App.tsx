import { ThemeProvider } from '../../hooks/useTheme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import Header from '../Header/index';
import Content from '../Content';
import Footer from '../Footer';
import Author from '../Author';
import './App.scss';
import  cn  from 'classnames';




const App = () => {
	return (  
		<ThemeProvider>
			<Router>
				<Layout>
					<div className={cn('App')}>
						<Header />
						<main className={cn('main')}>
							<Routes>
								<Route path="/" element={<Content />} />
								<Route path="/author" element={<Author />} />
								<Route path="*" element={<Content />} />
							</Routes>
						</main>
						<Footer />
					</div>
				</Layout>
			</Router>
		</ThemeProvider>
	);
};

export default App;
