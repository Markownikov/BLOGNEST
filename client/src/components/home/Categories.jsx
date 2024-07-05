import { Button, Table, TableHead, TableRow, TableCell, TableBody, styled } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';
import { categories } from '../../constants/data';

const StyledTable = styled(Table)`
    border: 1px solid rgba(224, 224, 224, 1);
`;

const StyledButton = styled(Button)`
    margin: 20px;
    width: 85%;
    background: #6495ED;
    color: #fff;
    text-decoration: none;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const AllCategoriesLink = styled(StyledLink)`
    color: #FF6347; /* Change to desired color */
    font-weight: bold;
    font-size: 1.2em;
    &:hover {
        color: #6495ED; /* Hover color */
    }
`;

// Function to get style based on category ID
const getRowStyle = (categoryId) => {
    switch (categoryId) {
        case 1:
            return { backgroundColor: '#FFD700' }; // Gold for category 1
        case 2:
            return { backgroundColor: '#ADFF2F' }; // GreenYellow for category 2
        case 3:
            return { backgroundColor: '#87CEEB' }; // SkyBlue for category 3
        case 4:
            return { backgroundColor: '#FFB6C1' }; // LightPink for category 4
        case 5:
            return { backgroundColor: '#FF8C00' }; // DarkOrange for category 5
        default:
            return { backgroundColor: '#FFFFFF' }; // Default color
    }
};

const Categories = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    
    return (
        <>
            <Link to={`/create?category=${category || ''}`} style={{ textDecoration: 'none' }}>
                <StyledButton variant="contained">Create Blog</StyledButton>
            </Link>
            
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <AllCategoriesLink to={"/"}>
                                All Categories
                            </AllCategoriesLink>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {categories.map(category => (
                        <TableRow key={category.id} style={getRowStyle(category.id)}>
                            <TableCell>
                                <StyledLink to={`/?category=${category.type}`}>
                                    {category.type}
                                </StyledLink>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </StyledTable>
        </>
    );
}

export default Categories;
