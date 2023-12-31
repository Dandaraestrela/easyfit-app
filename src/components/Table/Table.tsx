import * as S from "./Table.styles";

interface TableProps {
  headers: {
    title: string;
    accessor: string;
    cellType: Function;
    width?: string;
  }[];
  data: {
    [keys: string]: string | number | object | boolean | object[];
  }[];
}

export function Table({ headers, data }: TableProps) {
  return (
    <S.Wrapper>
      <thead>
        <tr>
          {headers.map(({ title, width = "auto" }) => (
            <th key={title} style={{ width: width }}>
              <S.TableHeader>{title}</S.TableHeader>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((content, i) => (
          <tr key={i} style={{ width: "100%" }}>
            {headers.map(({ cellType }) => (
              <td>{cellType(content)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </S.Wrapper>
  );
}
