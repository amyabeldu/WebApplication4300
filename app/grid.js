'use client';


import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Image from "next/image";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#2F4F4F',
  ...theme.typography.body2,
  padding: theme.spacing(0),
}));

export default function ColumnLayoutInsideGrid() {
  return (
    // <Box sx={{ flexGrow: 1 }}>
    <div>
      <Grid container spacing={2}>
        <Grid size={{xs: 12, sm:12, md:6, lg:9}}>
          <Item sx={{ height: '100%', boxSizing: 'border-box' }}>
            <section className="hero-section">
              <div className="hero">
                <div className="text">
                  <h1>Amy’s Endeavors</h1>
                  <p>Handmade soaps and handmade gifts for anyone special.</p>
                </div>
                <div className="image">
                  <Image src="/webapplication4300/images/SandlewoodSoap.webp" alt="Soap"
                         width={100}
                         height={8}
                         layout="responsive"
                  />
                </div>
              </div>
            </section>
          </Item>
        </Grid>
        <Grid size={{xs: 12, md:2}}>
          <Stack spacing={2}>
            <Item sx={{ height: '80%', boxSizing: 'border-box' }}>
              <div className="product-card">
                <Image src="/webapplication4300/images/cowboy_soap.webp"
                       alt="Handmade Soaps"
                       width={100}
                       height={10}
                       layout="responsive"
                />
                <p>Handmade Soaps</p>
              </div>
            </Item>
            <Item>
              <div className="product-card">
                <Image src="/webapplication4300/images/beard_oil.webp" alt="Beard Oil"
                       width={100}
                       height={10}
                       layout="responsive"
                />
                <p>Beard Oil</p>
              </div>
            </Item>
            <Item sx={{ height: '80%', boxSizing: 'border-box' }}>
              <div className="product-card">
                <Image src="/webapplication4300/images/Necklace.jpg" alt="Wire Wrapped Necklace"
                       width={80}
                       height={5}
                       layout="responsive"
                />
                <p>Wire Wrapped Necklaces</p>
              </div>
            </Item>
          </Stack>
        </Grid>
      </Grid>
    </div>
    // {/*</Box>*/}
  );
}