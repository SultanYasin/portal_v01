'use client';

import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
  CircularProgress,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { tokens } from '../../theme';

// Types for API Data
interface ApiContent {
  id: string;
  createdAt: string;
  name: string;
  country: string;
  city: string;
  address: string;
}

// Static content for other sections
const staticContent = {
  mainHeading: 'About Us',
  mainSubheading: 'Your Trusted Dashboard Solution',
  features: [
    {
      id: '1',
      title: 'Easy to Use',
      description: 'Simple and intuitive interface for all users',
    },
    {
      id: '2',
      title: 'Powerful Analytics',
      description: 'Advanced tools for deep data analysis',
    },
    {
      id: '3',
      title: 'Secure',
      description: 'Enterprise-grade security for your data',
    },
  ],
};

export default function About() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [apiData, setApiData] = useState<ApiContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from MockAPI
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://67bf9804b9d02a9f2246a1b0.mockapi.io/cms/api/v1/about'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        // Since the API returns an array, we'll take the first item
        setApiData(Array.isArray(data) ? data[0] : data);
      } catch (err) {
        setError('Failed to load content');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Standardized typography styles
  const typographyStyles = {
    pageTitle: {
      variant: 'h1' as const,
      sx: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: colors.grey[100],
        mb: 2,
      },
    },
    sectionTitle: {
      variant: 'h2' as const,
      sx: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: colors.grey[100],
        mb: 2,
      },
    },
    subtitle: {
      variant: 'h3' as const,
      sx: {
        fontSize: '1.5rem',
        color: colors.grey[200],
        mb: 4,
      },
    },
    cardTitle: {
      variant: 'h4' as const,
      sx: {
        fontSize: '1.3rem',
        color: colors.grey[100],
        mb: 2,
      },
    },
    bodyText: {
      variant: 'body1' as const,
      sx: {
        fontSize: '1rem',
        color: colors.grey[200],
        lineHeight: 1.6,
      },
    },
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
      >
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        {/* Header Section */}
        <Box textAlign="center" mb={8}>
          <Typography {...typographyStyles.pageTitle}>
            {staticContent.mainHeading}
          </Typography>
          <Typography {...typographyStyles.subtitle}>
            {staticContent.mainSubheading}
          </Typography>
        </Box>

        {/* Company Info from API */}
        {apiData && (
          <Box mb={8}>
            <Card sx={{ backgroundColor: colors.primary[400] }}>
              <CardContent sx={{ padding: 4 }}>
                <Typography {...typographyStyles.sectionTitle}>
                  {apiData.name}
                </Typography>
                <Typography {...typographyStyles.bodyText} mb={2}>
                  We are located in {apiData.city}, {apiData.country}
                </Typography>
                <Typography {...typographyStyles.bodyText}>
                  Address: {apiData.address}
                </Typography>
                <Typography
                  {...typographyStyles.bodyText}
                  sx={{ mt: 2, fontSize: '0.9rem', fontStyle: 'italic' }}
                >
                  Established:{' '}
                  {new Date(apiData.createdAt).toLocaleDateString()}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        )}

        {/* Features Section */}
        <Box mb={8}>
          <Typography {...typographyStyles.sectionTitle} textAlign="center">
            What We Offer
          </Typography>
          <Grid container spacing={4}>
            {staticContent.features.map((feature) => (
              <Grid item xs={12} md={4} key={feature.id}>
                <Card
                  sx={{
                    height: '100%',
                    backgroundColor: colors.primary[400],
                    '&:hover': {
                      backgroundColor: colors.primary[300],
                      transition: 'background-color 0.3s',
                    },
                  }}
                >
                  <CardContent sx={{ padding: 4 }}>
                    <Typography {...typographyStyles.cardTitle}>
                      {feature.title}
                    </Typography>
                    <Typography {...typographyStyles.bodyText}>
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
