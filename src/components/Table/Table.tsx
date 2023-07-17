import * as S from "./Table.styles";

interface TableProps {
  headers: { title: string; accessor: string; cellType: Function }[];
  data: {
    [keys: string]: string | number | object | boolean | object[];
  }[];
}

export function Table({ headers, data }: TableProps) {
  return (
    <S.Wrapper>
      <thead>
        <S.Row>
          {headers.map(({ title }, i) => (
            <th key={i}>
              <S.TableHeader key={title}>{title}</S.TableHeader>
            </th>
          ))}
        </S.Row>
      </thead>
      <tbody>
        {data.map((content, i) => (
          <S.Row key={i}>
            <>
              {headers.map(({ cellType }, i) => (
                <td key={i}>{cellType(content)}</td>
              ))}
            </>
          </S.Row>
        ))}
      </tbody>
    </S.Wrapper>
  );
}
