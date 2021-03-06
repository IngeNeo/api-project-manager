import mongoose from 'mongoose';
import { ModeloUsuario } from '../usuario/usuario.model.js'

const { Schema, model } = mongoose;

const ProyectoSchema = new Schema
	(
		{
			nombreproyecto: {
				type: String,
				require: true,
			},
			objetivos: [
				{
					descripcion:{
						type: String,
						require: true,
					},
					tipo: {
						type: String,
						enum: ['General', 'Especifico'],
						required: true,
					},
				},
			],
			presupuesto: {
				type: Number,
				require: true,
			},
			fechaInicio: {
				type: Date,
				require: false,
			},
			fechaFin: {
				type: Date,
				require: false,
			},
			lider: {
				type: Schema.Types.ObjectId,
				require: true,
				ref: ModeloUsuario,
			},
			estado: {
				type: String,
				enum: ['Activo', 'Inactivo'],
				default: 'Inactivo',
			},
			fase: {
				type: String,
				enum: ['Iniciado', 'En_desarrollo', 'Terminado', 'Nulo'],
				default: 'Nulo',
			}
		},
		{
			toJSON: { virtuals: true },
			toObject: { virtuals: true },
			versionKey: false
		}
		);

ProyectoSchema.virtual('avances', {
	ref: 'Avance',
	localField: '_id',
	foreignField: 'proyecto',
});

ProyectoSchema.virtual('inscripciones', {
	ref: 'Inscripcion',
	localField: '_id',
	foreignField: 'proyecto',
});

const ModeloProyecto = model('Proyecto', ProyectoSchema);

export { ModeloProyecto };