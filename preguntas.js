// JavaScript source code
const preguntas = [
    /* ===== BLOQUE 1: Ley N� 18.834 ===== */
    {
        pregunta: "�Qu� se entiende por 'carrera funcionaria' seg�n el Art. 3�?",
        opciones: [
            "Un sistema de ascensos basado solo en antig�edad",
            "Un sistema integral que regula el empleo p�blico con base en m�rito y jerarqu�a",
            "Un programa de capacitaci�n opcional para funcionarios",
            "Un beneficio exclusivo para empleados a contrata"
        ],
        respuesta: 1,
        explicacion: "La carrera funcionaria es un sistema integral (Art. 3� letra f) que garantiza igualdad de oportunidades, capacitaci�n y ascenso por m�rito."
    },
    {
        pregunta: "Un 'empleo a contrata' se caracteriza por ser:",
        opciones: [
            "Permanente y estable",
            "Transitorio y no permanente",
            "Solo para cargos directivos",
            "Renovable indefinidamente sin l�mite de tiempo"
        ],
        respuesta: 1,
        explicacion: "Los empleos a contrata son de car�cter transitorio y no permanente seg�n la definici�n del Estatuto Administrativo."
    },
    {
        pregunta: "Seg�n el Art. 4�, �qu� derecho tiene un suplente cuando reemplaza a un titular en licencia m�dica mayor a 30 d�as?",
        opciones: [
            "Percibir la remuneraci�n completa del cargo",
            "Recibir solo el 50% del sueldo",
            "Percibir la remuneraci�n de un grado inferior",
            "No tiene derecho a remuneraci�n"
        ],
        respuesta: 2,
        explicacion: "El suplente tiene derecho a percibir la remuneraci�n correspondiente al grado inferior inmediato al del cargo que reemplaza (Art. 4�)."
    },
    {
        pregunta: "�Cu�l es el plazo m�ximo para una suplencia en un cargo vacante?",
        opciones: [
            "3 meses",
            "6 meses",
            "1 a�o",
            "No hay plazo m�ximo"
        ],
        respuesta: 1,
        explicacion: "El plazo m�ximo para una suplencia en cargo vacante es de 6 meses seg�n lo establecido en el Estatuto Administrativo."
    },
    {
        pregunta: "Seg�n el Art. 12, �qu� requisito NO es necesario para ingresar a la Administraci�n del Estado?",
        opciones: [
            "Tener salud compatible con el cargo",
            "Poseer t�tulo universitario (sin importar la carrera)",
            "No estar inhabilitado para cargos p�blicos",
            "Haber aprobado educaci�n b�sica"
        ],
        respuesta: 1,
        explicacion: "No se exige t�tulo universitario para todos los cargos, solo cuando la naturaleza del empleo lo requiera (Art. 12)."
    },
    {
        pregunta: "�Qu� implica el principio de probidad administrativa (Art. 61 letra g)?",
        opciones: [
            "Cumplir horarios estrictos",
            "Priorizar el inter�s p�blico sobre el privado",
            "Realizar trabajos extraordinarios sin remuneraci�n",
            "Delegar funciones en subordinados"
        ],
        respuesta: 1,
        explicacion: "La probidad administrativa exige anteponer el inter�s p�blico al particular (Art. 61 letra g)."
    },
    {
        pregunta: "Si un funcionario recibe una orden que considera ilegal, �qu� debe hacer seg�n el Art. 62?",
        opciones: [
            "Cumplirla sin cuestionar",
            "Representarla por escrito y, si se reitera, cumplirla",
            "Negarse rotundamente a ejecutarla",
            "Denunciar directamente a la Contralor�a"
        ],
        respuesta: 1,
        explicacion: "El Art. 62 establece el deber de representaci�n ante �rdenes ilegales, pero si se reitera debe cumplirse."
    },
    {
        pregunta: "La jornada laboral m�xima diaria para funcionarios p�blicos es:",
        opciones: [
            "8 horas",
            "9 horas",
            "10 horas",
            "12 horas"
        ],
        respuesta: 1,
        explicacion: "La jornada ordinaria m�xima es de 9 horas diarias seg�n lo establece el Estatuto Administrativo."
    },
    {
        pregunta: "Un funcionario con 18 a�os de servicio tiene derecho a:",
        opciones: [
            "15 d�as h�biles de feriado",
            "20 d�as h�biles de feriado",
            "25 d�as h�biles de feriado",
            "30 d�as h�biles de feriado"
        ],
        respuesta: 1,
        explicacion: "Con 18 a�os de servicio se tiene derecho a 20 d�as h�biles de feriado anual."
    },
    {
        pregunta: "�Qu� permiso puede solicitar un funcionario con goce de remuneraciones?",
        opciones: [
            "6 d�as h�biles por motivos particulares al a�o",
            "10 d�as h�biles para viajar al extranjero",
            "3 meses continuos sin sueldo",
            "Licencia m�dica preventiva"
        ],
        respuesta: 0,
        explicacion: "Los funcionarios tienen derecho a 6 d�as h�biles anuales por motivos particulares con goce de remuneraciones."
    }
    /* ===== BLOQUE 2: Ley N� 18.575 (Probidad) + GES/AUGE ===== */
    ,
    /* ===== BLOQUE 2: Ley N� 18.575 (Probidad) + GES/AUGE ===== */
    {
        pregunta: "El principio de probidad administrativa exige:",
        opciones: [
            "Cumplir metas de productividad",
            "Conducta intachable y lealtad al inter�s p�blico",
            "Rendir informes mensuales de actividades",
            "Asistir a capacitaciones obligatorias"
        ],
        respuesta: 1,
        explicacion: "La probidad exige conducta intachable y primac�a del inter�s p�blico sobre el privado (Ley 18.575)."
    },
    {
        pregunta: "Seg�n el Art. 54, �qui�n NO puede ingresar a la Administraci�n del Estado?",
        opciones: [
            "Quien tenga un contrato vigente con el Estado por 100 UTM",
            "Un familiar hasta tercer grado de un jefe de departamento",
            "Un exfuncionario con 10 a�os de experiencia",
            "Un profesional con t�tulo t�cnico"
        ],
        respuesta: 1,
        explicacion: "El Art. 54 proh�be el nepotismo (ingreso de familiares hasta 3er grado de autoridades superiores)."
    },
    {
        pregunta: "�Cu�l de estas conductas viola la probidad administrativa (Art. 62)?",
        opciones: [
            "Usar millaje a�reo de viajes oficiales para vacaciones personales",
            "Recibir un regalo protocolario de bajo valor",
            "Delegar funciones en un subordinado",
            "Solicitar permiso por motivos particulares"
        ],
        respuesta: 0,
        explicacion: "El Art. 62 proh�be el uso de bienes estatales para beneficio personal."
    },
    {
        pregunta: "Un funcionario que usa recursos institucionales para beneficio personal comete falta de probidad seg�n:",
        opciones: [
            "Art. 52",
            "Art. 62, n�mero 3",
            "Art. 54, letra a",
            "Art. 61, letra f"
        ],
        respuesta: 1,
        explicacion: "El Art. 62 N�3 tipifica como falta grave el uso indebido de bienes p�blicos."
    },
    {
        pregunta: "�Qu� debe hacer un jefe si un funcionario solicita eliminar una anotaci�n de dem�rito?",
        opciones: [
            "Eliminarla autom�ticamente",
            "Dejar constancia escrita de los fundamentos si la rechaza",
            "Ignorar la solicitud",
            "Derivarla al Ministerio P�blico"
        ],
        respuesta: 1,
        explicacion: "El procedimiento exige fundamentar por escrito la negativa a eliminar anotaciones (Art. 87 del Estatuto Administrativo)."
    },
    {
        pregunta: "Las Garant�as Expl�citas en Salud (GES) NO incluyen:",
        opciones: [
            "Acceso a prestaciones",
            "Calidad en la atenci�n",
            "Cobertura del 100% de todos los tratamientos",
            "Plazos m�ximos de espera"
        ],
        respuesta: 2,
        explicacion: "El GES garantiza acceso, oportunidad y protecci�n financiera, pero no cubre el 100% de todos los tratamientos posibles."
    },
    {
        pregunta: "Para acceder al GES, el beneficiario debe:",
        opciones: [
            "Atenderse exclusivamente en la red designada por Fonasa/Isapre",
            "Pagar el costo total de la prestaci�n",
            "Presentar un recurso de protecci�n",
            "Tener m�s de 60 a�os"
        ],
        respuesta: 0,
        explicacion: "El GES requiere atenci�n en la red prestadora asignada por el sistema de salud (Fonasa o Isapre)."
    },
    {
        pregunta: "En caso de urgencia vital por una patolog�a GES, el usuario debe:",
        opciones: [
            "Esperar a ser derivado a su red asignada",
            "Dirigirse al servicio de urgencia m�s cercano",
            "Solicitar autorizaci�n previa a su Isapre",
            "Pagar un copago del 30%"
        ],
        respuesta: 1,
        explicacion: "En urgencias vitales, el paciente debe acudir al centro de salud m�s pr�ximo, sin restricci�n de red."
    },
    {
        pregunta: "Si Fonasa no cumple con la garant�a de oportunidad, el usuario debe:",
        opciones: [
            "Esperar 30 d�as antes de reclamar",
            "Reclamar ante la Superintendencia de Salud en 2 d�as",
            "Cambiarse a una Isapre",
            "Solicitar una indemnizaci�n"
        ],
        respuesta: 1,
        explicacion: "El reclamo por incumplimiento de plazos GES debe presentarse dentro de 2 d�as h�biles ante la Superintendencia."
    },
    {
        pregunta: "�Qu� poblaci�n tiene derecho a atenci�n preferente seg�n la Ley 20.584?",
        opciones: [
            "Solo adultos mayores",
            "Personas con discapacidad y sus cuidadores",
            "Funcionarios p�blicos",
            "Pacientes con enfermedades cr�nicas"
        ],
        respuesta: 1,
        explicacion: "La Ley 20.584 establece atenci�n preferente para personas con discapacidad y sus cuidadores/as."
    }
    /* ===== BLOQUE 3: Red Asistencial Antofagasta ===== */
    ,
    /* ===== BLOQUE 3: Red Asistencial Antofagasta ===== */
    {
        pregunta: "La misi�n del Servicio de Salud Antofagasta es:",
        opciones: [
            "Administrar recursos financieros de la regi�n",
            "Garantizar atenci�n de salud de manera integral y equitativa",
            "Fiscalizar a las Isapres de la regi�n",
            "Exclusivamente tratar enfermedades GES"
        ],
        respuesta: 1,
        explicacion: "El Servicio de Salud Antofagasta tiene como misi�n garantizar atenci�n integral y equitativa a la poblaci�n (Plan de Salud Regional)."
    },
    {
        pregunta: "El Hospital Regional de Antofagasta se llama:",
        opciones: [
            "Dr. Carlos Cisternas",
            "Dr. Marcos Macuada",
            "Dr. Leonardo Guzm�n",
            "21 de Mayo"
        ],
        respuesta: 2,
        explicacion: "El principal hospital de la regi�n lleva el nombre del destacado m�dico Dr. Leonardo Guzm�n."
    },
    {
        pregunta: "�Qu� hospital de la red es de alta complejidad?",
        opciones: [
            "Hospital de Taltal",
            "Hospital de Mejillones",
            "Hospital Dr. Carlos Cisternas (Calama)",
            "Hospital de Tocopilla"
        ],
        respuesta: 2,
        explicacion: "El Hospital de Calama es el �nico de alta complejidad en la red norte, junto al Regional de Antofagasta."
    },
    {
        pregunta: "El Centro Oncol�gico del Norte se enfoca en:",
        opciones: [
            "Atenci�n primaria",
            "Rehabilitaci�n de pacientes con c�ncer",
            "Emergencias pedi�tricas",
            "Tratamientos dentales"
        ],
        respuesta: 1,
        explicacion: "Este centro especializado brinda tratamiento y rehabilitaci�n oncol�gica a pacientes de la macrozona norte."
    },
    {
        pregunta: "�Qu� porcentaje de la poblaci�n de Antofagasta es urbana seg�n el censo 2017?",
        opciones: [
            "85%",
            "92%",
            "98%",
            "100%"
        ],
        respuesta: 2,
        explicacion: "El 97.9% de la poblaci�n regional vive en zonas urbanas, concentrada principalmente en Antofagasta y Calama."
    },
    {
        pregunta: "�Cu�l de estos establecimientos NO pertenece al Servicio de Salud Antofagasta?",
        opciones: [
            "Hospital de Mejillones",
            "Hospital San Juan de Dios",
            "Hospital de Tocopilla",
            "Centro de Especialidades"
        ],
        respuesta: 1,
        explicacion: "El Hospital San Juan de Dios es un establecimiento privado, no forma parte de la red p�blica."
    },
    {
        pregunta: "El Hospital de Taltal es clasificado como:",
        opciones: [
            "Alta complejidad",
            "Baja complejidad con enfoque comunitario",
            "Centro de referencia nacional",
            "Establecimiento privado"
        ],
        respuesta: 1,
        explicacion: "Es un hospital de baja complejidad que atiende a la comunidad costera con servicios b�sicos."
    },
    {
        pregunta: "�Qu� servicio destaca en el Hospital de Tocopilla?",
        opciones: [
            "Unidad de trasplantes",
            "Sala de di�lisis con 6 sillones",
            "Banco de sangre regional",
            "Centro de investigaci�n"
        ],
        respuesta: 1,
        explicacion: "Este hospital cuenta con unidad de di�lisis para atender a pacientes renales de la provincia."
    },
    {
        pregunta: "La Atenci�n Primaria en Antofagasta se caracteriza por:",
        opciones: [
            "Atender solo emergencias",
            "Ser el primer nivel de contacto con el sistema p�blico",
            "Realizar cirug�as complejas",
            "Gestionar exclusivamente patolog�as GES"
        ],
        respuesta: 1,
        explicacion: "La APS es la puerta de entrada al sistema de salud, con enfoque preventivo y comunitario."
    },
    {
        pregunta: "�Qu� hospital fue construido mediante concesi�n?",
        opciones: [
            "Hospital de Taltal",
            "Hospital Regional de Antofagasta",
            "Hospital de Mejillones",
            "Hospital de Calama"
        ],
        respuesta: 1,
        explicacion: "El Hospital Regional se edific� bajo modelo de concesi�n (PPP) e inici� operaciones en 2013."
    }
    /* ===== BLOQUE 4: Ley N� 20.584 + Situaciones Pr�cticas ===== */
    ,
    /* ===== BLOQUE 4: Ley N� 20.584 + Situaciones Pr�cticas ===== */
    {
        pregunta: "Seg�n el Art. 5� bis, �qui�nes tienen derecho a atenci�n preferente?",
        opciones: [
            "Solo adultos mayores",
            "Personas con discapacidad y sus cuidadores",
            "Mayores de 60 a�os, personas con discapacidad y cuidadores",
            "Exclusivamente funcionarios p�blicos"
        ],
        respuesta: 2,
        explicacion: "El Art. 5� bis incluye a mayores de 60 a�os, personas con discapacidad y sus cuidadores/as (Ley 20.584)."
    },
    {
        pregunta: "El derecho a atenci�n preferente debe respetar:",
        opciones: [
            "La priorizaci�n por urgencia vital",
            "El orden de llegada al establecimiento",
            "Solo horarios de ma�ana",
            "La disponibilidad de personal administrativo"
        ],
        respuesta: 0,
        explicacion: "La atenci�n preferente no puede interferir con la priorizaci�n de urgencias vitales (Reglamento Ley 20.584)."
    },
    {
        pregunta: "Un cuidador de una persona con discapacidad puede exigir:",
        opciones: [
            "Acceso gratuito a medicamentos",
            "Ser atendido en cualquier momento sin esperar",
            "Atenci�n preferente en acciones vinculadas a la salud",
            "Bonos de transporte prioritario"
        ],
        respuesta: 2,
        explicacion: "Los cuidadores tienen derecho a preferencia solo en atenciones relacionadas con su rol de cuidado (Art. 5� bis)."
    },
    {
        pregunta: "Un funcionario p�blico recibe un regalo costoso de un proveedor. �Qu� debe hacer seg�n la probidad administrativa?",
        opciones: [
            "Aceptarlo si es por agradecimiento",
            "Rechazarlo o declararlo seg�n protocolo",
            "Guardarlo para uso personal si nadie lo ve",
            "Donarlo a una beneficencia"
        ],
        respuesta: 1,
        explicacion: "La Ley 18.575 exige rechazar o declarar regalos que puedan comprometer la imparcialidad (Art. 62)."
    },
    {
        pregunta: "Un paciente con diabetes (patolog�a GES) es derivado a un centro no perteneciente a su red. �Qu� consecuencia aplica?",
        opciones: [
            "Pierde las garant�as GES y usa libre elecci�n",
            "Debe pagar multa por incumplimiento",
            "La Isapre cubre el 100% igualmente",
            "El Estado asume los costos autom�ticamente"
        ],
        respuesta: 0,
        explicacion: "Fuera de la red asignada, el GES no aplica y el paciente debe usar libre elecci�n (con mayores costos)."
    },
    {
        pregunta: "Un tecn�logo m�dico observa que un colega usa equipos del hospital para proyectos personales. �Qu� debe hacer seg�n el Estatuto Administrativo?",
        opciones: [
            "Denunciarlo ante su jefe directo o autoridad competente",
            "Ignorarlo para evitar conflictos",
            "Reportarlo solo si afecta su trabajo",
            "Usar tambi�n los equipos"
        ],
        respuesta: 0,
        explicacion: "El Art. 67 del Estatuto obliga a denunciar faltas graves como el uso indebido de bienes p�blicos."
    },
    {
        pregunta: "Un funcionario con 12 a�os de servicio solicita permiso. �Cu�ntos d�as h�biles con goce de sueldo puede pedir al a�o?",
        opciones: [
            "3 d�as",
            "6 d�as",
            "10 d�as",
            "15 d�as"
        ],
        respuesta: 1,
        explicacion: "Los permisos por motivos particulares son de 6 d�as h�biles anuales con goce de remuneraciones."
    },
    {
        pregunta: "�Qu� acci�n tomar�a si un superior le ordena realizar una pr�ctica no autorizada en un paciente?",
        opciones: [
            "Ejecutarla para evitar sanciones",
            "Representar por escrito la orden y, si se insiste, cumplirla",
            "Negarse sin documentar el hecho",
            "Delegar la tarea en otro colega"
        ],
        respuesta: 1,
        explicacion: "El Art. 62 del Estatuto exige representaci�n escrita de �rdenes ilegales, pero si se reitera debe cumplirse."
    },
    {
        pregunta: "Un usuario reclama por incumplimiento de plazo GES en su cirug�a. �Qu� instituci�n debe intervenir si Fonasa no responde?",
        opciones: [
            "Ministerio de Salud",
            "Superintendencia de Salud",
            "Municipalidad",
            "PDI"
        ],
        respuesta: 1,
        explicacion: "La Superintendencia de Salud fiscaliza el cumplimiento de garant�as GES (Ley 19.966)."
    },
    {
        pregunta: "Un paciente con c�ncer es atendido en el Centro Oncol�gico del Norte. �Qu� garant�a GES aplica?",
        opciones: [
            "Acceso, oportunidad, protecci�n financiera y calidad",
            "Solo gratuidad total",
            "Prioridad en lista de espera",
            "Atenci�n domiciliaria obligatoria"
        ],
        respuesta: 0,
        explicacion: "Las patolog�as GES garantizan: acceso, plazos m�ximos, protecci�n financiera (copago) y calidad."
    }
    /* ===== BLOQUE 5: Integraci�n de Contenidos (Dificultad Alta) ===== */
    ,
    /* ===== BLOQUE 5: Integraci�n de Contenidos (Dificultad Alta) ===== */
    {
        pregunta: "Un funcionario del Hospital de Calama con 16 a�os de servicio quiere tomar 7 d�as h�biles continuos de permiso. �Qu� normativa aplica?",
        opciones: [
            "Ley 18.834 Art. 109 - Solo puede tomar 6 d�as h�biles al a�o con goce de sueldo",
            "Ley 20.584 - Puede tomar hasta 10 d�as por ser personal de salud",
            "GES - Tiene derecho a 15 d�as por antig�edad",
            "Ninguna limitaci�n aplica en hospitales de alta complejidad"
        ],
        respuesta: 0,
        explicacion: "El Art. 109 del Estatuto Administrativo (Ley 18.834) limita a 6 d�as h�biles anuales los permisos con goce de sueldo, sin excepciones por cargo o ubicaci�n."
    },
    {
        pregunta: "Un tecn�logo m�dico recibe un diagn�stico GES de glaucoma. �Qu� garant�a NO aplica en este caso?",
        opciones: [
            "Acceso a tratamiento en 90 d�as",
            "Cobertura del 100% del costo total sin copago",
            "Atenci�n por profesional acreditado",
            "Protecci�n financiera con copago regulado"
        ],
        respuesta: 1,
        explicacion: "El GES incluye copagos regulados (no gratuidad total), salvo para beneficiarios de Fonasa A y B (Ley 19.966 Art. 4�)."
    },
    {
        pregunta: "�Qu� conducta ser�a sancionada bajo el Art. 62 de la Ley 18.575?",
        opciones: [
            "Un jefe que asigna comisiones de servicio por 4 meses sin decreto fundado",
            "Un funcionario que usa el veh�culo institucional para viajes personales",
            "Un profesional que rechaza una orden por considerarla ilegal",
            "Un suplente que exige remuneraci�n completa en licencia m�dica >30 d�as"
        ],
        respuesta: 1,
        explicacion: "El Art. 62 N�3 de la Ley de Probidad sanciona el uso indebido de bienes p�blicos para beneficio personal."
    },
    {
        pregunta: "Un paciente diab�tico GES llega al Hospital de Tocopilla en emergencia. �Qu� debe hacer el personal?",
        opciones: [
            "Derivarlo inmediatamente a Antofagasta",
            "Atenderlo y estabilizarlo, luego coordinar con su red GES",
            "Solicitar pago anticipado por no ser su red asignada",
            "Negar la atenci�n por no pertenecer a la red primaria"
        ],
        respuesta: 1,
        explicacion: "En emergencias, se prioriza la atenci�n inmediata seg�n Ley 20.584, independientemente de la red GES asignada."
    },
    {
        pregunta: "Seg�n el Estatuto Administrativo, �qu� requisito es indispensable para designar a un suplente?",
        opciones: [
            "Que el cargo est� vacante por m�s de 15 d�as",
            "Que el titular est� con licencia m�dica superior a 30 d�as",
            "Que se cumplan las normas del T�tulo I, sin excepciones",
            "Que el suplente tenga mayor antig�edad que otros candidatos"
        ],
        respuesta: 2,
        explicacion: "El T�tulo I del Estatuto establece los principios generales (m�rito, igualdad de oportunidades) que deben respetarse en toda designaci�n."
    },
    {
        pregunta: "La Sala de Di�lisis del Hospital de Tocopilla opera bajo qu� principio del Servicio de Salud Antofagasta?",
        opciones: [
            "Descentralizaci�n de servicios de alta complejidad",
            "Mejorar calidad de vida evitando traslados innecesarios",
            "Priorizaci�n de pacientes urbanos",
            "Exclusividad para pacientes GES"
        ],
        respuesta: 1,
        explicacion: "La instalaci�n de servicios cr�ticos en zonas alejadas busca reducir la carga de desplazamiento para pacientes cr�nicos (Plan de Salud Regional)."
    },
    {
        pregunta: "Un funcionario con 22 a�os de servicio tiene derecho a:",
        opciones: [
            "15 d�as h�biles de feriado",
            "20 d�as h�biles de feriado",
            "25 d�as h�biles de feriado",
            "30 d�as corridos de vacaciones"
        ],
        respuesta: 2,
        explicacion: "Seg�n el Art. 110 del Estatuto Administrativo, con 20+ a�os de servicio corresponden 25 d�as h�biles de feriado anual."
    },
    {
        pregunta: "�Qu� art�culo de la Ley 20.584 protege a un adulto mayor que espera 4 horas en urgencias?",
        opciones: [
            "Art. 3� sobre deberes del personal",
            "Art. 5� bis sobre atenci�n preferente",
            "Art. 12 sobre tiempos de espera",
            "No aplica por ser caso de urgencia"
        ],
        respuesta: 1,
        explicacion: "El Art. 5� bis garantiza atenci�n preferente a adultos mayores, aunque en urgencias se prioriza gravedad (Reglamento Ley 20.584)."
    },
    {
        pregunta: "Un jefe de servicio en Antofagasta debe investigar una presunta falta de probidad. �Qu� procedimiento sigue?",
        opciones: [
            "Aplicar sanci�n inmediata",
            "Instruir investigaci�n sumaria seg�n Art. 126",
            "Derivar al Ministerio P�blico",
            "Solicitar renuncia voluntaria"
        ],
        respuesta: 1,
        explicacion: "El Art. 126 del Estatuto exige investigaci�n sumaria para faltas graves, garantizando derecho a defensa antes de sancionar."
    },
    {
        pregunta: "La telemedicina en Mejillones refleja qu� objetivo del Modelo de Atenci�n?",
        opciones: [
            "Reducir costos operacionales",
            "Mejorar acceso y resolutividad en zonas alejadas",
            "Reemplazar completamente la atenci�n presencial",
            "Priorizar pacientes privados"
        ],
        respuesta: 1,
        explicacion: "La telemedicina busca superar barreras geogr�ficas (Pol�tica Nacional de Salud Digital 2020-2025)."
    }
    /* ===== BLOQUE 6: �tica Profesional y Gesti�n Hospitalaria ===== */
    ,
    /* ===== BLOQUE 6: �tica Profesional y Gesti�n Hospitalaria ===== */
    {
        pregunta: "Un tecn�logo m�dico descubre que un colega altera resultados de ex�menes. �Qu� debe hacer PRIMERO seg�n las normativas?",
        opciones: [
            "Denunciar an�nimamente en redes sociales",
            "Reportar al jefe directo o unidad de �tica del hospital",
            "Confrontar directamente al colega",
            "Ignorarlo por no ser su �rea"
        ],
        respuesta: 1,
        explicacion: "El protocolo �tico exige reportar primero a la autoridad inmediata o comit� de �tica hospitalario (Ley 20.584 Art. 7� y C�digo Sanitario)."
    },
    {
        pregunta: "Seg�n el principio de probidad, �qu� har�a si un proveedor le ofrece un 'regalo' por agilizar un pedido?",
        opciones: [
            "Aceptarlo si es de bajo valor",
            "Rechazarlo y documentar el hecho",
            "Recibirlo y donarlo al hospital",
            "Pedir que lo entregue a otro departamento"
        ],
        respuesta: 1,
        explicacion: "La Ley 18.575 Art. 62 exige rechazar cualquier beneficio que comprometa imparcialidad, dejando constancia escrita."
    },
    {
        pregunta: "Un paciente reclama por mala atenci�n en el Hospital de Taltal. �Qu� derecho puede invocar?",
        opciones: [
            "Ley 20.584 (Derecho a trato digno y reclamo)",
            "GES (Garant�a de calidad)",
            "Estatuto Administrativo (Art. 61)",
            "Todas las anteriores"
        ],
        respuesta: 3,
        explicacion: "Puede invocar: 1) Derechos Ley 20.584, 2) Garant�as GES si aplica, y 3) Deberes funcionarios del Estatuto."
    },
    {
        pregunta: "�Qu� establecimiento de la red de Antofagasta tiene sala de di�lisis?",
        opciones: [
            "Hospital de Mejillones",
            "Hospital de Tocopilla",
            "Centro Oncol�gico del Norte",
            "Hospital 21 de Mayo"
        ],
        respuesta: 1,
        explicacion: "El Hospital de Tocopilla cuenta con 6 sillones de di�lisis para atender a pacientes renales de la provincia."
    },
    {
        pregunta: "El Modelo de Atenci�n Integral del Servicio de Salud Antofagasta prioriza:",
        opciones: [
            "Tratamientos curativos sobre prevenci�n",
            "Enfoque familiar y comunitario",
            "Atenci�n exclusiva a patolog�as GES",
            "Centralizaci�n en hospitales urbanos"
        ],
        respuesta: 1,
        explicacion: "El modelo se basa en APS con enfoque familiar/comunitario (Plan de Salud Regional 2021-2025)."
    },
    {
        pregunta: "Para optimizar la atenci�n en Calama (alta demanda migrante), la red deber�a:",
        opciones: [
            "Limitar acceso a no residentes",
            "Fortalecer capacitaci�n intercultural y capacidad resolutiva",
            "Derivar todos los casos a Antofagasta",
            "Reducir cobertura GES"
        ],
        respuesta: 1,
        explicacion: "La pol�tica de salud intercultural (MINSAL) recomienda adaptar servicios a diversidad cultural y aumentar capacidad local."
    },
    {
        pregunta: "Durante una emergencia masiva, el protocolo GES indica:",
        opciones: [
            "Suspender todas las garant�as",
            "Mantener prioridad para pacientes GES en riesgo vital",
            "Atender solo a afiliados de Fonasa",
            "Derivar todos los casos al Hospital Regional"
        ],
        respuesta: 1,
        explicacion: "Las urgencias GES mantienen prioridad si hay riesgo vital, seg�n protocolos de emergencia del MINSAL."
    },
    {
        pregunta: "Si un funcionario p�blico es sorprendido usando informaci�n privilegiada para beneficio personal, �qu� sanci�n aplica?",
        opciones: [
            "Amonestaci�n verbal",
            "Sumario administrativo y posible despido",
            "Capacitaci�n obligatoria",
            "Traslado a otro departamento"
        ],
        respuesta: 1,
        explicacion: "Constituye falta grave al Estatuto Administrativo (Art. 62 N�7) y Ley 18.575, con sanciones hasta t�rmino de funciones."
    },
    {
        pregunta: "�Qu� art�culo del Estatuto Administrativo protege a un funcionario que denuncia corrupci�n?",
        opciones: [
            "Art. 61 (letra k) sobre denuncia de irregularidades",
            "Art. 103 sobre feriados",
            "Art. 54 sobre inhabilidades",
            "Art. 12 sobre requisitos de ingreso"
        ],
        respuesta: 0,
        explicacion: "El Art. 61 letra k garantiza protecci�n a quienes denuncien actos contrarios a la probidad."
    },
    {
        pregunta: "La telemedicina en Mejillones y Taltal busca resolver:",
        opciones: [
            "Falta de especialistas en zonas alejadas",
            "Reemplazo de personal t�cnico",
            "Reducci�n de costos en atenci�n primaria",
            "Cumplimiento de metas GES"
        ],
        respuesta: 0,
        explicacion: "La telemedicina conecta a m�dicos generales con especialistas en centros de referencia (Estrategia Nacional de Salud Digital)."
    }
    /* ===== BLOQUE 7: Simulacro Final Cronometrado ===== */
    ,
    /* ===== BLOQUE 7: Simulacro Final Cronometrado ===== */
    {
        pregunta: "Un funcionario con 5 a�os de servicio solicita permiso para viajar al extranjero sin goce de sueldo. �Cu�l es el plazo m�ximo que puede pedir?",
        opciones: [
            "3 meses",
            "6 meses",
            "1 a�o",
            "2 a�os"
        ],
        respuesta: 3,
        explicacion: "El Art. 110 del Estatuto Administrativo permite hasta 2 a�os de permiso sin remuneraci�n, renovable por 1 a�o adicional."
    },
    {
        pregunta: "Seg�n GES, �qu� acci�n es INCORRECTA ante una urgencia vital por infarto?",
        opciones: [
            "Dirigirse al servicio de urgencia m�s cercano",
            "Esperar autorizaci�n de su Isapre antes de atenderse",
            "Solicitar traslado una vez estabilizado",
            "Notificar a Fonasa/Isapre dentro de las 24 horas"
        ],
        respuesta: 1,
        explicacion: "En urgencias GES no se requiere autorizaci�n previa (Protocolo MINSAL para Urgencias Vitales)."
    },
    {
        pregunta: "El Hospital Comunitario de Mejillones destaca por:",
        opciones: [
            "Ser de alta complejidad",
            "Su programa de telemedicina y rondas rurales",
            "Tener unidad de trasplantes",
            "Atender solo patolog�as GES"
        ],
        respuesta: 1,
        explicacion: "Este hospital prioriza estrategias de atenci�n remota y visitas a zonas rurales (Plan de Salud Antofagasta 2021-2025)."
    },
    {
        pregunta: "�Qu� art�culo del Estatuto Administrativo regula la obediencia a �rdenes ilegales?",
        opciones: [
            "Art. 12",
            "Art. 44",
            "Art. 62",
            "Art. 103"
        ],
        respuesta: 2,
        explicacion: "El Art. 62 establece el deber de representaci�n escrita ante �rdenes contrarias a la legalidad."
    },
    {
        pregunta: "Un paciente con c�ncer es derivado al Centro Oncol�gico del Norte. �Qu� garant�a GES NO aplica aqu�?",
        opciones: [
            "Acceso a quimioterapia en 30 d�as",
            "Cobertura del 100% sin copagos",
            "Atenci�n por onc�logo certificado",
            "Protecci�n financiera con tope de pago"
        ],
        respuesta: 1,
        explicacion: "El GES incluye copagos regulados (no gratuidad total), excepto para beneficiarios Fonasa A y B."
    },
    {
        pregunta: "La prohibici�n de contratar a familiares de jefes hasta 3er grado est� en:",
        opciones: [
            "Ley 18.834, Art. 4�",
            "Ley 18.575, Art. 54",
            "Ley 20.584, Art. 5� bis",
            "Ninguna de las anteriores"
        ],
        respuesta: 1,
        explicacion: "El Art. 54 de la Ley de Probidad (18.575) proh�be el nepotismo en la administraci�n p�blica."
    },
    {
        pregunta: "Un tecn�logo m�dico en Antofagasta recibe una orden de su jefe que pone en riesgo a un paciente. �Qu� hace?",
        opciones: [
            "La cumple para evitar sanciones",
            "La representa por escrito y, si se insiste, la ejecuta",
            "Se niega sin documentar",
            "Delega la responsabilidad"
        ],
        respuesta: 1,
        explicacion: "Protocolo del Art. 62 del Estatuto: representaci�n escrita y cumplimiento si la orden se reitera."
    },
    {
        pregunta: "�Qu� establecimiento NO es parte de la red del Servicio de Salud Antofagasta?",
        opciones: [
            "Hospital Dr. Carlos Cisternas",
            "Cl�nica Antofagasta",
            "Hospital Marcos Macuada",
            "Centro Oncol�gico del Norte"
        ],
        respuesta: 1,
        explicacion: "La Cl�nica Antofagasta es un centro privado, no pertenece a la red p�blica."
    },
    {
        pregunta: "Seg�n la Ley 20.584, �qui�n tiene derecho a atenci�n preferente?",
        opciones: [
            "Solo adultos mayores",
            "Personas con discapacidad y cuidadores",
            "Funcionarios p�blicos",
            "Pacientes con enfermedades raras"
        ],
        respuesta: 1,
        explicacion: "Art. 5� bis: atenci�n preferente para personas con discapacidad y sus cuidadores/as."
    },
    {
        pregunta: "Un suplente en un cargo vacante no puede extenderse m�s de:",
        opciones: [
            "3 meses",
            "6 meses",
            "1 a�o",
            "2 a�os"
        ],
        respuesta: 1,
        explicacion: "L�mite establecido en el Art. 4� del Estatuto Administrativo para suplencias en cargos vacantes."
    },
    {
        pregunta: "El principio de probidad administrativa exige:",
        opciones: [
            "Cumplir metas de productividad",
            "Priorizar el inter�s p�blico sobre el privado",
            "Asistir a capacitaciones obligatorias",
            "Firmar informes mensuales"
        ],
        respuesta: 1,
        explicacion: "Base de la probidad seg�n Ley 18.575: primac�a del inter�s general sobre el particular."
    },
    {
        pregunta: "�Qu� hospital de la red fue construido mediante concesi�n?",
        opciones: [
            "Hospital de Taltal",
            "Hospital Regional de Antofagasta",
            "Hospital de Mejillones",
            "Hospital de Tocopilla"
        ],
        respuesta: 1,
        explicacion: "El Hospital Regional se edific� bajo modelo PPP (concesi�n) e inici� operaciones en 2013."
    },
    {
        pregunta: "Un funcionario usa el veh�culo institucional para viajes personales. Esto viola:",
        opciones: [
            "Art. 61 del Estatuto Administrativo",
            "Art. 62 de la Ley 18.575",
            "Art. 109 sobre permisos",
            "Normas GES"
        ],
        respuesta: 1,
        explicacion: "El Art. 62 N�3 de la Ley de Probidad sanciona el uso indebido de bienes p�blicos."
    },
    {
        pregunta: "La poblaci�n urbana en Antofagasta (Censo 2017) es:",
        opciones: [
            "85%",
            "92%",
            "98%",
            "100%"
        ],
        respuesta: 2,
        explicacion: "Datos INE: 97.9% de poblaci�n urbana, principalmente en Antofagasta y Calama."
    },
    {
        pregunta: "�D�nde debe constar una anotaci�n de dem�rito?",
        opciones: [
            "En la hoja de vida del funcionario",
            "Solo en el registro del jefe directo",
            "En el diario oficial",
            "En la Superintendencia de Salud"
        ],
        respuesta: 0,
        explicacion: "Registro obligatorio en hoja de vida seg�n Art. 87 del Estatuto Administrativo."
    },
    {
        pregunta: "Un paciente con EPOC (GES) es atendido fuera de su red. �Qu� ocurre?",
        opciones: [
            "Pierde las garant�as GES",
            "Debe pagar multa",
            "Su Isapre cubre el 100% igual",
            "El hospital asume los costos"
        ],
        respuesta: 0,
        explicacion: "Fuera de la red asignada, el GES no aplica y rige libre elecci�n (Ley 19.966 Art. 4�)."
    },
    {
        pregunta: "La jornada laboral semanal m�xima para funcionarios p�blicos es:",
        opciones: [
            "40 horas",
            "44 horas",
            "45 horas",
            "48 horas"
        ],
        respuesta: 1,
        explicacion: "Art. 111 del Estatuto Administrativo: jornada ordinaria de 44 horas semanales."
    },
    {
        pregunta: "�Qu� hace la Superintendencia de Salud si Fonasa incumple plazos GES?",
        opciones: [
            "Multar al paciente",
            "Designar un nuevo prestador en 2 d�as",
            "Cerrar el hospital",
            "Exigir indemnizaci�n"
        ],
        respuesta: 1,
        explicacion: "Procedimiento est�ndar para garantizar continuidad de atenci�n (Reglamento GES)."
    },
    {
        pregunta: "El Club de Diab�ticos de Mejillones refleja el enfoque en:",
        opciones: [
            "Atenci�n curativa",
            "Participaci�n comunitaria y prevenci�n",
            "Reducci�n de costos",
            "Cumplimiento de metas GES"
        ],
        respuesta: 1,
        explicacion: "Modelo de autocuidado y educaci�n grupal promovido por la Estrategia de Salud Familiar."
    },
    {
        pregunta: "Un funcionario con 18 a�os de servicio tiene derecho a:",
        opciones: [
            "15 d�as de feriado",
            "20 d�as de feriado",
            "25 d�as de feriado",
            "30 d�as de feriado"
        ],
        respuesta: 1,
        explicacion: "Art. 110 del Estatuto: 20 d�as h�biles de feriado anual con 15+ a�os de servicio."
    }
];
