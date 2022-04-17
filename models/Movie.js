'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var movieSchema = Schema( {
  Title: String,
  Director: String,
  Year: Number
} );

module.exports = mongoose.model( 'Movie', movieSchema );