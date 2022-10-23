import '../styles/tokens-grid.css';

interface ITokensGridProps {
	tokens: Record<string, string>;
	hasPixelValues?: boolean;
}

export function TokensGrid({ tokens, hasPixelValues }: ITokensGridProps) {
	return (
		<table className="tokens-grid">
			<thead>
				<tr>
					<th>Key</th>
					<th>Value</th>
					{hasPixelValues && <th>Pixel Value</th>}
				</tr>
			</thead>

			<tbody>
				{Object.entries(tokens).map(([key, token]) => {
					return (
						<tr key={key}>
							<td>{key}</td>
							<td>{token}</td>
							{hasPixelValues && (
								<td>
									{Number(token.replace('rem', '')) * 16}px
								</td>
							)}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
