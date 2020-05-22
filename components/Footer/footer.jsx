import React from 'react';
import { Row, Col } from 'antd';
import { StyledFooter } from './styles';

const Footer = () => {
	return (
		<>
			<StyledFooter>
				<Row justify={'space-between'}>
					<Col>Developed by Intern.House © 2020. All rights reserved.</Col>
					<Col>
						Contact us at
						<a href="mailto:contact@intern.house"> contact@intern.house</a>.
					</Col>
				</Row>
			</StyledFooter>
		</>
	);
};

export default Footer;
