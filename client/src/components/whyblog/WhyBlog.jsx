
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const WhyBlog = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h4">What is a blog?</Typography>
                <Text variant="h6"> Blog definition:
                In simple terms, a blog is a regularly updated website or web page, and can either be used for personal use or to fulfill a business need.<br/>
                A brief history — in 1994, Swarthmore College student Justin Hall is credited with the creation of the first blog, Links.net. At the time, however, it wasn't considered a blog … just a personal homepage.
                    
                </Text>
                <Typography variant="h4">Why should you start a blog?</Typography>
                <Text variant="h6">
                To help your company rank on search engines.<br/>
                To share information about a given topic and become an expert in an industry.<br/>
                To attract visitors to your site, and turn those visitors into leads.<br/>
                To cultivate an online community and engage with an audience.
                        
                </Text>
            </Wrapper>
        </Box>
    )
}

export default WhyBlog;