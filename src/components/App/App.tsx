import { ThemeProvider } from '../../hooks/useTheme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import Header from '../Header/index';
import Content from '../Content';
import Footer from '../Footer';
import Author from '../Author';
import  cn  from 'classnames';
import Button from '../../ui/Button';
import './App.scss';

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
						<Button 
							isDark={false}
							isDisabled={false} 
							isFilled={true}  
							className='button-trash'>
							<span>React Node</span>
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M15.5294 2.91765H11.5765V1.41176C11.5765 0.564706 10.9176 0 10.0706 0H6.30588C5.83529 0 5.45882 0.0941176 5.17647 0.376471C4.89412 0.658824 4.70588 0.941176 4.70588 1.41176V2.82353H0.470588C0.188235 2.82353 0 3.01176 0 3.29412C0 3.57647 0.188235 3.85882 0.470588 3.85882H2.44706V13.8353C2.44706 14.4 2.63529 14.9647 3.01176 15.3412C3.38824 15.7176 3.85882 16 4.42353 16H11.8588C12.4235 16 12.8941 15.7176 13.2706 15.3412C13.6471 14.9647 13.8353 14.4 13.8353 13.8353V3.85882H15.5294C15.8118 3.85882 16 3.67059 16 3.38824C16 3.10588 15.8118 2.91765 15.5294 2.91765ZM5.64706 1.50588C5.64706 1.31765 5.74118 1.12941 5.83529 1.03529C5.92941 0.941176 6.02353 0.941176 6.21176 0.941176H10.0706C10.3529 0.941176 10.6353 1.12941 10.6353 1.41176V2.82353H5.64706V1.50588ZM12.8 13.8353C12.8 14.1176 12.7059 14.4941 12.5176 14.6824C12.3294 14.8706 12.0471 15.0588 11.8588 15.0588H4.42353C4.14118 15.0588 3.95294 14.9647 3.76471 14.6824C3.57647 14.4941 3.48235 14.1176 3.48235 13.8353V3.85882H12.8941V13.8353H12.8Z" fill="#575757"/>
							</svg>

						</Button>
						<Footer />
					</div>
				</Layout>
			</Router>
		</ThemeProvider>
	);
};

export default App;
