'use client';

import Link from 'next/link';
import {
  Box,
  Container,
  Grid,
  Typography,
  useTheme,
  IconButton,
} from '@mui/material';
import { tokens } from '@/theme';
// Import MUI icons
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

// Types for CMS data
type SocialLink = {
  name: string;
  url: string;
  icon: any; // In CMS this would be a string/URL, transformed to icon component
};

type FooterLink = {
  label: string;
  href: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

type FooterData = {
  company: {
    name: string;
    description: string;
    socialLinks: SocialLink[];
  };
  sections: FooterSection[];
};

// Map of icon names to components (for CMS integration)
const iconMap = {
  TwitterIcon,
  LinkedInIcon,
  GitHubIcon,
  FacebookIcon,
  InstagramIcon,
};

// Function to fetch data from CMS
/*
async function getFooterData(): Promise<FooterData> {
  try {
    // Example fetch from CMS
    // const res = await fetch('your-cms-endpoint/footer');
    // const data = await res.json();
    
    // Transform CMS data to match our types
    // Example: Convert icon strings to components
    // data.company.socialLinks = data.company.socialLinks.map(link => ({
    //   ...link,
    //   icon: iconMap[link.iconName]
    // }));
    
    // return data;
  } catch (error) {
    console.error('Failed to fetch footer data:', error);
    return defaultFooterData;
  }
}
*/

// Default/fallback data
const defaultFooterData: FooterData = {
  company: {
    name: 'YourCompany',
    description: 'Making the world a better place.',
    socialLinks: [
      { name: 'Twitter', url: 'https://twitter.com', icon: TwitterIcon },
      { name: 'LinkedIn', url: 'https://linkedin.com', icon: LinkedInIcon },
      { name: 'GitHub', url: 'https://github.com', icon: GitHubIcon },
      { name: 'Facebook', url: 'https://facebook.com', icon: FacebookIcon },
      { name: 'Instagram', url: 'https://instagram.com', icon: InstagramIcon },
    ],
  },
  sections: [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '/features' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Solutions', href: '/solutions' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'News', href: '/news' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Documentation', href: '/docs' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Cookie Policy', href: '/cookies' },
        { label: 'Security', href: '/security' },
      ],
    },
  ],
};

const Footer = () => {
  const theme = useTheme();

  // Example of how to use with React Query or SWR
  /*
  const { data: footerData = defaultFooterData, isLoading } = useSWR(
    'footer',
    getFooterData
  );

  if (isLoading) {
    return <FooterSkeleton />;
  }
  */

  const footerData = defaultFooterData; // Using default data for now

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        py: 3,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Company Info */}
          <Grid item xs={12} sm={4}>
            <Box>
              <Typography
                variant="h6"
                color="text.primary"
                sx={{ fontWeight: 'bold' }}
              >
                {footerData.company.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                {footerData.company.description}
              </Typography>
              <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                {footerData.company.socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <IconButton
                      key={social.name}
                      component="a"
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      sx={{
                        color: theme.palette.text.secondary,
                        '&:hover': {
                          color: theme.palette.primary.main,
                        },
                      }}
                    >
                      <Icon />
                    </IconButton>
                  );
                })}
              </Box>
            </Box>
          </Grid>

          {/* Footer Sections */}
          {footerData.sections.map((section) => (
            <Grid item xs={6} sm={2} key={section.title}>
              <Typography
                variant="subtitle1"
                color="text.primary"
                sx={{ fontWeight: 'bold', mb: 2 }}
              >
                {section.title}
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {section.links.map((link) => (
                  <Box component="li" key={link.label} sx={{ mb: 1 }}>
                    <Link
                      href={link.href}
                      style={{
                        color: theme.palette.text.secondary,
                        textDecoration: 'none',
                      }}
                    >
                      {link.label}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Bottom Bar */}
        <Box
          sx={{
            mt: 8,
            pt: 3,
            borderTop: `1px solid ${theme.palette.divider}`,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} {footerData.company.name}. All rights
            reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
