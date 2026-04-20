export interface Patient {
  id: number
  nombre: string
  edad: number
  diagnostico: string
  parte: string
}

export const patients: Patient[] = [
  { id: 1, nombre: 'Carlos Ruiz', edad: 34, diagnostico: 'Luxación en la mano', parte: 'mano' },
  { id: 2, nombre: 'María López', edad: 52, diagnostico: 'Fractura de cúbito (antebrazo)', parte: 'antebrazo' },
  { id: 3, nombre: 'José García', edad: 28, diagnostico: 'Esguince de tobillo', parte: 'pie' },
  { id: 4, nombre: 'Ana Martínez', edad: 45, diagnostico: 'Fractura de clavícula', parte: 'clavícula' },
  { id: 5, nombre: 'Luis Fernández', edad: 60, diagnostico: 'Rotura de menisco (rodilla)', parte: 'rodilla' },
  { id: 6, nombre: 'Elena Torres', edad: 38, diagnostico: 'Fractura de costilla', parte: 'costillas' },
  { id: 7, nombre: 'Pedro Sánchez', edad: 19, diagnostico: 'Fractura de radio (antebrazo)', parte: 'antebrazo' },
  { id: 8, nombre: 'Isabel Díaz', edad: 71, diagnostico: 'Artrosis de cadera', parte: 'cadera' },
  { id: 9, nombre: 'Miguel Herrera', edad: 42, diagnostico: 'Hernia discal lumbar', parte: 'columna' },
  { id: 10, nombre: 'Sofía Castro', edad: 25, diagnostico: 'Fractura de cráneo', parte: 'cráneo' },
]
