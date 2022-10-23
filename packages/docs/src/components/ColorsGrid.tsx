import { getContrast } from 'polished';
import { colors } from '@ignite-ui/tokens';

export function ColorsGrid() {
	return Object.entries(colors).map(([key, color]) => {
		return (
			<div
				key={key}
				style={{
					background: color,

					padding: '2rem',
				}}
			>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',

						color:
							getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF',

						fontFamily: 'monospace',
					}}
				>
					<strong>${key}</strong>
					<span>{color}</span>
				</div>
			</div>
		);
	});
}
