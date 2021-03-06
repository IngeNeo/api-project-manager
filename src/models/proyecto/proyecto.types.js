import { gql } from 'apollo-server-express';

const tiposProyecto = gql`

input crearObjetivo {
	descripcion: String!
	tipo: Enum_TipoObjetivo!
}

input camposObjetivo {
	descripcion: String!
	tipo: Enum_TipoObjetivo!
}

input camposProyecto {
	nombreproyecto: String
	presupuesto: Float
	fechaInicio: Date
	fechaFin: Date
	estado: Enum_EstadoProyecto
	fase: Enum_FaseProyecto
	lider: String
}

type Proyecto {
	_id: ID!
	nombreproyecto: String!
	presupuesto: Float!
	fechaInicio: Date
	fechaFin: Date
	estado: Enum_EstadoProyecto
	fase: Enum_FaseProyecto
	lider: Usuario!
	objetivos: [Objetivo]
	avances: [Avance]
	inscripciones: [Inscripcion]
}

type Objetivo {
	_id: ID!
	descripcion: String!
	tipo: Enum_TipoObjetivo!
}

type Query {
	Proyectos: [Proyecto]
	Proyecto(_id: String!): Proyecto
	ProyectosLiderados(lider: String!):[Proyecto]
}

type Mutation {

	crearProyecto(
      nombreproyecto: String!
      presupuesto: Float!
      lider: String!
      objetivos: [crearObjetivo]
    ): Proyecto

	editarProyecto(_id: String!, campos: camposProyecto!): Proyecto

	crearObjetivo(idProyecto: String!, campos: camposObjetivo!): Proyecto

	editarObjetivo(idProyecto: String!, indexObjetivo: Int!, campos: camposObjetivo!): Proyecto

	eliminarObjetivo(idProyecto: String!, idObjetivo: String!): Proyecto

	eliminarProyecto(_id: String): Proyecto
}
`;

export { tiposProyecto };