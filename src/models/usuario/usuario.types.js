import { gql } from 'apollo-server-express';

const tiposUsuario = gql`

	input camposUsuario {
		cedula: String
		nombres: String
		apellidos: String
		correo: String
		tusuario: Enum_Tusuario
		estado: Enum_EstadoUsuario
		password: String
	}

	input FiltroUsuarios {
		_id: ID
		cedula: String
		correo: String
		tusuario: Enum_Tusuario
		estado: Enum_EstadoUsuario
	}

	type Usuario {
		_id: ID!
		cedula: String!
		nombres: String!
		apellidos: String!
		correo: String!
		tusuario: Enum_Tusuario!
		estado: Enum_EstadoUsuario
		inscripciones: [Inscripcion]
		avancesCreados: [Avance]
		proyectosLiderados: [Proyecto]
	}

	type Query {
		UsuariosAll: [Usuario]
		Usuarios(filtro: FiltroUsuarios): [Usuario]
		Usuario(_id: String!): Usuario
	}

	type Mutation {
		crearUsuario(
			cedula: String!
			nombres: String!
			apellidos: String!
			correo: String!
			tusuario: Enum_Tusuario!
			password: String
		): Usuario

		editarUsuario(
			_id: String!
			cedula: String
			nombres: String
			apellidos: String
			correo: String
			estado: Enum_EstadoUsuario
		): Usuario

		eliminarUsuario(_id: String, correo: String): Usuario
	}
`;

export { tiposUsuario };