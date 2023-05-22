--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: categorie; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categorie (
    id_categorie bigint NOT NULL,
    nom_categorie character varying(50) NOT NULL,
    description_categorie character varying(150) NOT NULL
);


ALTER TABLE public.categorie OWNER TO postgres;

--
-- Name: categorie_id_categorie_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categorie_id_categorie_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categorie_id_categorie_seq OWNER TO postgres;

--
-- Name: categorie_id_categorie_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categorie_id_categorie_seq OWNED BY public.categorie.id_categorie;


--
-- Name: categorie_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categorie_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categorie_seq OWNER TO postgres;

--
-- Name: commande; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.commande (
    num_commande bigint NOT NULL,
    date_commande date NOT NULL,
    montant numeric(2,0) NOT NULL,
    statut character varying(20) NOT NULL,
    date_livraison date NOT NULL,
    num_utilisateur bigint NOT NULL
);


ALTER TABLE public.commande OWNER TO postgres;

--
-- Name: commande_num_commande_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.commande_num_commande_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.commande_num_commande_seq OWNER TO postgres;

--
-- Name: commande_num_commande_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.commande_num_commande_seq OWNED BY public.commande.num_commande;


--
-- Name: commande_num_utilisateur_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.commande_num_utilisateur_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.commande_num_utilisateur_seq OWNER TO postgres;

--
-- Name: commande_num_utilisateur_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.commande_num_utilisateur_seq OWNED BY public.commande.num_utilisateur;


--
-- Name: commande_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.commande_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.commande_seq OWNER TO postgres;

--
-- Name: commentaire; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.commentaire (
    id_commentaire bigint NOT NULL,
    titre character varying(50) NOT NULL,
    contenu character varying(150) NOT NULL,
    date_commentaire date NOT NULL,
    num_utilisateur bigint NOT NULL,
    ref_produit bigint NOT NULL
);


ALTER TABLE public.commentaire OWNER TO postgres;

--
-- Name: commentaire_id_commentaire_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.commentaire_id_commentaire_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.commentaire_id_commentaire_seq OWNER TO postgres;

--
-- Name: commentaire_id_commentaire_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.commentaire_id_commentaire_seq OWNED BY public.commentaire.id_commentaire;


--
-- Name: commentaire_num_utilisateur_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.commentaire_num_utilisateur_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.commentaire_num_utilisateur_seq OWNER TO postgres;

--
-- Name: commentaire_num_utilisateur_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.commentaire_num_utilisateur_seq OWNED BY public.commentaire.num_utilisateur;


--
-- Name: commentaire_ref_produit_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.commentaire_ref_produit_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.commentaire_ref_produit_seq OWNER TO postgres;

--
-- Name: commentaire_ref_produit_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.commentaire_ref_produit_seq OWNED BY public.commentaire.ref_produit;


--
-- Name: commentaire_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.commentaire_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.commentaire_seq OWNER TO postgres;

--
-- Name: composer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.composer (
    ref_produit bigint NOT NULL,
    num_commande bigint NOT NULL,
    "quantité_commandee" smallint NOT NULL
);


ALTER TABLE public.composer OWNER TO postgres;

--
-- Name: composer_num_commande_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.composer_num_commande_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.composer_num_commande_seq OWNER TO postgres;

--
-- Name: composer_num_commande_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.composer_num_commande_seq OWNED BY public.composer.num_commande;


--
-- Name: composer_ref_produit_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.composer_ref_produit_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.composer_ref_produit_seq OWNER TO postgres;

--
-- Name: composer_ref_produit_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.composer_ref_produit_seq OWNED BY public.composer.ref_produit;


--
-- Name: facture; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.facture (
    id_facture bigint NOT NULL,
    montant_facture numeric(2,0) NOT NULL,
    date_facture date NOT NULL,
    adresse_facture character varying(50) NOT NULL,
    taux numeric(5,2) NOT NULL,
    num_commande bigint NOT NULL
);


ALTER TABLE public.facture OWNER TO postgres;

--
-- Name: facture_id_facture_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.facture_id_facture_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.facture_id_facture_seq OWNER TO postgres;

--
-- Name: facture_id_facture_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.facture_id_facture_seq OWNED BY public.facture.id_facture;


--
-- Name: facture_num_commande_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.facture_num_commande_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.facture_num_commande_seq OWNER TO postgres;

--
-- Name: facture_num_commande_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.facture_num_commande_seq OWNED BY public.facture.num_commande;


--
-- Name: facture_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.facture_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.facture_seq OWNER TO postgres;

--
-- Name: note; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.note (
    id_note bigint NOT NULL,
    note smallint NOT NULL,
    num_utilisateur bigint NOT NULL,
    ref_produit bigint NOT NULL,
    id_not bigint NOT NULL
);


ALTER TABLE public.note OWNER TO postgres;

--
-- Name: note_id_note_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.note_id_note_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.note_id_note_seq OWNER TO postgres;

--
-- Name: note_id_note_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.note_id_note_seq OWNED BY public.note.id_note;


--
-- Name: note_num_utilisateur_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.note_num_utilisateur_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.note_num_utilisateur_seq OWNER TO postgres;

--
-- Name: note_num_utilisateur_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.note_num_utilisateur_seq OWNED BY public.note.num_utilisateur;


--
-- Name: note_ref_produit_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.note_ref_produit_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.note_ref_produit_seq OWNER TO postgres;

--
-- Name: note_ref_produit_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.note_ref_produit_seq OWNED BY public.note.ref_produit;


--
-- Name: note_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.note_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.note_seq OWNER TO postgres;

--
-- Name: produit; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.produit (
    ref_produit bigint NOT NULL,
    nom_produit character varying(50) NOT NULL,
    prix_vente_htva real NOT NULL,
    description_produit character varying(150) NOT NULL,
    marqueproduit character varying(20),
    id_categorie bigint,
    quantite bigint NOT NULL,
    image character varying(300)
);


ALTER TABLE public.produit OWNER TO postgres;

--
-- Name: produit_ref_produit_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.produit_ref_produit_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.produit_ref_produit_seq OWNER TO postgres;

--
-- Name: produit_ref_produit_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.produit_ref_produit_seq OWNED BY public.produit.ref_produit;


--
-- Name: t_types_utilisateur; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.t_types_utilisateur (
    id_type bigint NOT NULL,
    num_utilisateur bigint NOT NULL,
    num bigint NOT NULL
);


ALTER TABLE public.t_types_utilisateur OWNER TO postgres;

--
-- Name: t_types_utilisateur_id_type_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.t_types_utilisateur_id_type_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.t_types_utilisateur_id_type_seq OWNER TO postgres;

--
-- Name: t_types_utilisateur_id_type_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.t_types_utilisateur_id_type_seq OWNED BY public.t_types_utilisateur.id_type;


--
-- Name: t_types_utilisateur_num_utilisateur_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.t_types_utilisateur_num_utilisateur_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.t_types_utilisateur_num_utilisateur_seq OWNER TO postgres;

--
-- Name: t_types_utilisateur_num_utilisateur_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.t_types_utilisateur_num_utilisateur_seq OWNED BY public.t_types_utilisateur.num_utilisateur;


--
-- Name: type_utilisateur; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.type_utilisateur (
    id_type bigint NOT NULL,
    nom_type character varying(50) NOT NULL
);


ALTER TABLE public.type_utilisateur OWNER TO postgres;

--
-- Name: type_utilisateur_id_type_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.type_utilisateur_id_type_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.type_utilisateur_id_type_seq OWNER TO postgres;

--
-- Name: type_utilisateur_id_type_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.type_utilisateur_id_type_seq OWNED BY public.type_utilisateur.id_type;


--
-- Name: type_utilisateur_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.type_utilisateur_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.type_utilisateur_seq OWNER TO postgres;

--
-- Name: utilisateur; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.utilisateur (
    num bigint NOT NULL,
    num_telephone character varying(255) NOT NULL,
    nom character varying(255) NOT NULL,
    mail character varying(255) NOT NULL,
    adresse character varying(255) NOT NULL,
    ville character varying(255) NOT NULL,
    login character varying(255) NOT NULL,
    psword character varying(255) NOT NULL,
    civilite boolean NOT NULL
);


ALTER TABLE public.utilisateur OWNER TO postgres;

--
-- Name: utilisateur_num_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.utilisateur_num_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.utilisateur_num_seq OWNER TO postgres;

--
-- Name: utilisateur_num_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.utilisateur_num_seq OWNED BY public.utilisateur.num;


--
-- Name: utilisateur_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.utilisateur_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.utilisateur_seq OWNER TO postgres;

--
-- Name: vend; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.vend (
    ref_produit bigint NOT NULL,
    num_utilisateur bigint NOT NULL
);


ALTER TABLE public.vend OWNER TO postgres;

--
-- Name: vend_num_utilisateur_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.vend_num_utilisateur_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.vend_num_utilisateur_seq OWNER TO postgres;

--
-- Name: vend_num_utilisateur_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.vend_num_utilisateur_seq OWNED BY public.vend.num_utilisateur;


--
-- Name: vend_ref_produit_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.vend_ref_produit_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.vend_ref_produit_seq OWNER TO postgres;

--
-- Name: vend_ref_produit_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.vend_ref_produit_seq OWNED BY public.vend.ref_produit;


--
-- Name: categorie id_categorie; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categorie ALTER COLUMN id_categorie SET DEFAULT nextval('public.categorie_id_categorie_seq'::regclass);


--
-- Name: commande num_commande; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.commande ALTER COLUMN num_commande SET DEFAULT nextval('public.commande_num_commande_seq'::regclass);


--
-- Name: commande num_utilisateur; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.commande ALTER COLUMN num_utilisateur SET DEFAULT nextval('public.commande_num_utilisateur_seq'::regclass);


--
-- Name: commentaire id_commentaire; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.commentaire ALTER COLUMN id_commentaire SET DEFAULT nextval('public.commentaire_id_commentaire_seq'::regclass);


--
-- Name: commentaire num_utilisateur; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.commentaire ALTER COLUMN num_utilisateur SET DEFAULT nextval('public.commentaire_num_utilisateur_seq'::regclass);


--
-- Name: commentaire ref_produit; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.commentaire ALTER COLUMN ref_produit SET DEFAULT nextval('public.commentaire_ref_produit_seq'::regclass);


--
-- Name: composer ref_produit; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.composer ALTER COLUMN ref_produit SET DEFAULT nextval('public.composer_ref_produit_seq'::regclass);


--
-- Name: composer num_commande; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.composer ALTER COLUMN num_commande SET DEFAULT nextval('public.composer_num_commande_seq'::regclass);


--
-- Name: facture id_facture; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.facture ALTER COLUMN id_facture SET DEFAULT nextval('public.facture_id_facture_seq'::regclass);


--
-- Name: facture num_commande; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.facture ALTER COLUMN num_commande SET DEFAULT nextval('public.facture_num_commande_seq'::regclass);


--
-- Name: note id_note; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.note ALTER COLUMN id_note SET DEFAULT nextval('public.note_id_note_seq'::regclass);


--
-- Name: note num_utilisateur; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.note ALTER COLUMN num_utilisateur SET DEFAULT nextval('public.note_num_utilisateur_seq'::regclass);


--
-- Name: note ref_produit; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.note ALTER COLUMN ref_produit SET DEFAULT nextval('public.note_ref_produit_seq'::regclass);


--
-- Name: produit ref_produit; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produit ALTER COLUMN ref_produit SET DEFAULT nextval('public.produit_ref_produit_seq'::regclass);


--
-- Name: t_types_utilisateur id_type; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_types_utilisateur ALTER COLUMN id_type SET DEFAULT nextval('public.t_types_utilisateur_id_type_seq'::regclass);


--
-- Name: t_types_utilisateur num_utilisateur; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_types_utilisateur ALTER COLUMN num_utilisateur SET DEFAULT nextval('public.t_types_utilisateur_num_utilisateur_seq'::regclass);


--
-- Name: type_utilisateur id_type; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.type_utilisateur ALTER COLUMN id_type SET DEFAULT nextval('public.type_utilisateur_id_type_seq'::regclass);


--
-- Name: utilisateur num; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilisateur ALTER COLUMN num SET DEFAULT nextval('public.utilisateur_num_seq'::regclass);


--
-- Name: vend ref_produit; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vend ALTER COLUMN ref_produit SET DEFAULT nextval('public.vend_ref_produit_seq'::regclass);


--
-- Name: vend num_utilisateur; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vend ALTER COLUMN num_utilisateur SET DEFAULT nextval('public.vend_num_utilisateur_seq'::regclass);


--
-- Data for Name: categorie; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categorie (id_categorie, nom_categorie, description_categorie) FROM stdin;
3	Électronique	Électronique
4	Mode	Mode
5	Vêtements	Vêtements
6	Sport	Sport
7	Animaux	Animaux
8	Alimentation	Alimentation
2	Électroménager\n	Électroménager
\.


--
-- Data for Name: commande; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.commande (num_commande, date_commande, montant, statut, date_livraison, num_utilisateur) FROM stdin;
\.


--
-- Data for Name: commentaire; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.commentaire (id_commentaire, titre, contenu, date_commentaire, num_utilisateur, ref_produit) FROM stdin;
\.


--
-- Data for Name: composer; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.composer (ref_produit, num_commande, "quantité_commandee") FROM stdin;
\.


--
-- Data for Name: facture; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.facture (id_facture, montant_facture, date_facture, adresse_facture, taux, num_commande) FROM stdin;
\.


--
-- Data for Name: note; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.note (id_note, note, num_utilisateur, ref_produit, id_not) FROM stdin;
\.


--
-- Data for Name: produit; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.produit (ref_produit, nom_produit, prix_vente_htva, description_produit, marqueproduit, id_categorie, quantite, image) FROM stdin;
6	Refrigerateur	400	Les points clés\nLxHxP : 55 x 143.4 x 54.2 cm\nNiveau sonore de 41dB - Label énergie E	Fagor	2	200	https://boulanger.scene7.com/is/image/Boulanger/8050147628430_h_f_l_0?wid=1000&hei=1000
7	Aspirateur	109	Sols & meubles\nPuissance maximale : 22,2 V	Fagor	2	200	https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/images/products/primary/394467-01.png?$responsive$&cropPathE=desktop&fit=stretch,1&wid=288\n
8	 Apple iPhone 14	1379	Ecran : large 6,7" soit 17 cm\nMémoire interne : 128 Go\nCapteurs photos : 3 (48 MP en capteur principal)\nMémoire RAM : 6 Go - Processeur : Puce A16	Iphone	3	1000	https://fr.shopping.rakuten.com/photo/2207045134.jpg
9	pc portable Asus 	1379	Taille : 16" (40 cm) - Résolution : 1920 x 1080 pixels\nFréquence : 60 Hz - Temps de réponse : 5 ms\nIdéal : pour travailler	Asur	3	376	https://e-leclerc.scene7.com/is/image/gtinternet/4711081852377_1?op_sharpen=1&resmode=bilin&fmt=pjpeg&qlt=85&wid=450&fit=fit,1&hei=450\n
10	NIKE AIR MAX TW 	97	Les Air Max TW présentent une empeigne.	Nike	4	376	https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7b8d9c7b-7573-461c-8976-b1a5203993c0/chaussure-air-max-tw-next-nature-pour-1G3zm5.png\n
11	Montre Minimalist chronographe noire 	132	Montre Minimalist chronographe en maille milanaise inoxydable, noire	Nike	4	500	https://fossil.scene7.com/is/image/FossilPartners/FS5943_main?$sfcc_fos_large$
12	JEAN MOM À TAILLE HAUTE 	48	habiller ne devrait pas être un dilemme moral. 	Levis	5	500	https://static.kiabi.com/images/jean-mom-a-taille-tres-haute---l30-triple-stone-femme-du-34-au-48-zk669_6_frb2.jpg
13	Veste de costume coupe slim - Noir 	90	Casual ou raffinée, la veste s'adapte à tous les styles.	Jules	5	500	https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dwc50f0efc/images/722577_9020_V1.jpg?sw=1562&sh=1800&sm=fit\n
14	RAQUETTE DE TENNIS	13	Nos équipes de conception ont développé ce produit pour vous permettre de découvrir le tennis à petit prix.	decathlon	6	500	https://contents.mediadecathlon.com/p2498855/k$3d3ea0373c95f79c14067a370b5e682f/sq/raquette-de-tennis-adulte-tr100-noire.jpg?format=auto&f=969x969
15	SAC DE TRANSPORT 	60	Nos équipes de conception ont développé ce produit pour vous permettre de découvrir le tennis à petit prix.	decathlon	6	500	https://cdn.shopify.com/s/files/1/0251/1588/5650/products/charlie-sauge-web_1c7b53c6-e2bf-4e80-a641-c1ec1fc7f36f_720x.jpg?v=1664207677
16	Arbre à chat	25	Vous avez besoin d’un espace dédié à votre chat ?	Cdiscount	7	500	https://shop-cdn-m.mediazs.com/bilder/arbre/chat/cats/flower/6/400/63085_PLA_Kratzbaum_Cat_Flower_1_6.jpg
17	Caisse de transport pour petit chien, chat 	23	accessoire indispensable Pour petit chien, chat et rongeur	zoomalia	7	500	https://static.zoomalia.com/prod_img/89457/lm_868dd45045f8c68db9f54e70c67048d32e81612515902.jpg
18	Pain 	10	Pain frais	La lune	8	500	https://mapatisserie.fr/wp-content/uploads/2020/06/recette-pain-de-campagne-20200603_201946-01-scaled.jpeg
1	smartphone	190.99	Téléphone portable à vendre	Huawei	\N	3	\N
5	Ballon	10.5	Ballon de football	adidas	\N	0	\N
\.


--
-- Data for Name: t_types_utilisateur; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.t_types_utilisateur (id_type, num_utilisateur, num) FROM stdin;
2	1	52
2	2	54
3	4	103
1	5	104
\.


--
-- Data for Name: type_utilisateur; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.type_utilisateur (id_type, nom_type) FROM stdin;
1	administrateur
2	vendeur
3	client
\.


--
-- Data for Name: utilisateur; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.utilisateur (num, num_telephone, nom, mail, adresse, ville, login, psword, civilite) FROM stdin;
1	0148932870	Utilisateur1	user1@gmail.com	5 rue des roses	Paris	user1	usr1	t
2	0935670293	Utilisateur2	user2@gmail.com	18 rue des tulipes	Paris	user2	usr2	f
4	0622489370	userTestNomChange	userTest@gmail.com	2 rue des Lilas	Paris	user4	usr4	t
5	0878456578	UtilisateurNext	next@gmail.com	5 rue blaba	Paris	usenxt	passnxt	t
52	0132547270	Utilisateur7	use7@gmail.com	18 rue des roses	Paris	user7	$2a$10$.1.774CLqFG49ZNBKIyvEODPoNaodII/o7hZNIxLiWRSeXEA4cIAq	t
54	0132457270	Utilisateur8	use8@gmail.com	24 rue des roses	Paris	user8	$2a$10$rLu9XUjRBjsTjkp3uEC9Ne7Xrkb/uopH00WuZvjjTeWgyGvx0/1sS	f
103	0948932870	Utilisateur12	user12@gmail.com	19 rue des roses	Paris	userClient	$2a$10$9qB0552GtqEnM9ECztoiKeumqTnFR2e9sdDoMUjAC/EW4du7Rz.Vi	t
104	0354698745	admin	admin@gmail.com	19 rue des admins	Paris	userAdmin	$2a$10$ltD51Ny1Za.RwN0OeNiuFes45cL.P1ZLAiTFM/7W/KEFJRY7JdAXq	f
\.


--
-- Data for Name: vend; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.vend (ref_produit, num_utilisateur) FROM stdin;
\.


--
-- Name: categorie_id_categorie_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categorie_id_categorie_seq', 8, true);


--
-- Name: categorie_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categorie_seq', 1, false);


--
-- Name: commande_num_commande_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.commande_num_commande_seq', 1, false);


--
-- Name: commande_num_utilisateur_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.commande_num_utilisateur_seq', 1, false);


--
-- Name: commande_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.commande_seq', 1, false);


--
-- Name: commentaire_id_commentaire_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.commentaire_id_commentaire_seq', 1, false);


--
-- Name: commentaire_num_utilisateur_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.commentaire_num_utilisateur_seq', 1, false);


--
-- Name: commentaire_ref_produit_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.commentaire_ref_produit_seq', 1, false);


--
-- Name: commentaire_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.commentaire_seq', 1, false);


--
-- Name: composer_num_commande_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.composer_num_commande_seq', 1, false);


--
-- Name: composer_ref_produit_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.composer_ref_produit_seq', 1, false);


--
-- Name: facture_id_facture_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.facture_id_facture_seq', 1, false);


--
-- Name: facture_num_commande_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.facture_num_commande_seq', 1, false);


--
-- Name: facture_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.facture_seq', 1, false);


--
-- Name: note_id_note_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.note_id_note_seq', 1, false);


--
-- Name: note_num_utilisateur_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.note_num_utilisateur_seq', 1, false);


--
-- Name: note_ref_produit_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.note_ref_produit_seq', 1, false);


--
-- Name: note_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.note_seq', 1, false);


--
-- Name: produit_ref_produit_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.produit_ref_produit_seq', 18, true);


--
-- Name: t_types_utilisateur_id_type_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.t_types_utilisateur_id_type_seq', 1, false);


--
-- Name: t_types_utilisateur_num_utilisateur_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.t_types_utilisateur_num_utilisateur_seq', 5, true);


--
-- Name: type_utilisateur_id_type_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.type_utilisateur_id_type_seq', 3, true);


--
-- Name: type_utilisateur_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.type_utilisateur_seq', 1, false);


--
-- Name: utilisateur_num_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.utilisateur_num_seq', 4, true);


--
-- Name: utilisateur_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.utilisateur_seq', 151, true);


--
-- Name: vend_num_utilisateur_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.vend_num_utilisateur_seq', 1, false);


--
-- Name: vend_ref_produit_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.vend_ref_produit_seq', 1, false);


--
-- Name: categorie pk_categorie; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categorie
    ADD CONSTRAINT pk_categorie PRIMARY KEY (id_categorie);


--
-- Name: commande pk_commande; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.commande
    ADD CONSTRAINT pk_commande PRIMARY KEY (num_commande);


--
-- Name: commentaire pk_commentaire; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.commentaire
    ADD CONSTRAINT pk_commentaire PRIMARY KEY (id_commentaire);


--
-- Name: composer pk_composer; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.composer
    ADD CONSTRAINT pk_composer PRIMARY KEY (ref_produit, num_commande);


--
-- Name: facture pk_facture; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.facture
    ADD CONSTRAINT pk_facture PRIMARY KEY (id_facture);


--
-- Name: note pk_note; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.note
    ADD CONSTRAINT pk_note PRIMARY KEY (id_note);


--
-- Name: produit pk_produit; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produit
    ADD CONSTRAINT pk_produit PRIMARY KEY (ref_produit);


--
-- Name: type_utilisateur pk_type; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.type_utilisateur
    ADD CONSTRAINT pk_type PRIMARY KEY (id_type);


--
-- Name: t_types_utilisateur pk_types_utilisateur; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_types_utilisateur
    ADD CONSTRAINT pk_types_utilisateur PRIMARY KEY (num, id_type);


--
-- Name: utilisateur pk_utilisateur; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilisateur
    ADD CONSTRAINT pk_utilisateur PRIMARY KEY (num);


--
-- Name: vend pk_vend; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vend
    ADD CONSTRAINT pk_vend PRIMARY KEY (num_utilisateur, ref_produit);


--
-- Name: utilisateur unique_mail; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilisateur
    ADD CONSTRAINT unique_mail UNIQUE (mail);


--
-- Name: produit fk_categorie; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produit
    ADD CONSTRAINT fk_categorie FOREIGN KEY (id_categorie) REFERENCES public.categorie(id_categorie);


--
-- Name: t_types_utilisateur fk_id_type; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_types_utilisateur
    ADD CONSTRAINT fk_id_type FOREIGN KEY (id_type) REFERENCES public.type_utilisateur(id_type);


--
-- Name: commande fk_num; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.commande
    ADD CONSTRAINT fk_num FOREIGN KEY (num_utilisateur) REFERENCES public.utilisateur(num);


--
-- Name: vend fk_num; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vend
    ADD CONSTRAINT fk_num FOREIGN KEY (num_utilisateur) REFERENCES public.utilisateur(num);


--
-- Name: commentaire fk_num; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.commentaire
    ADD CONSTRAINT fk_num FOREIGN KEY (num_utilisateur) REFERENCES public.utilisateur(num);


--
-- Name: note fk_num; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.note
    ADD CONSTRAINT fk_num FOREIGN KEY (num_utilisateur) REFERENCES public.utilisateur(num);


--
-- Name: t_types_utilisateur fk_num; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_types_utilisateur
    ADD CONSTRAINT fk_num FOREIGN KEY (num_utilisateur) REFERENCES public.utilisateur(num);


--
-- Name: commande fk_num2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.commande
    ADD CONSTRAINT fk_num2 FOREIGN KEY (num_utilisateur) REFERENCES public.utilisateur(num);


--
-- Name: facture fk_num_commande; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.facture
    ADD CONSTRAINT fk_num_commande FOREIGN KEY (num_commande) REFERENCES public.commande(num_commande);


--
-- Name: composer fk_num_commande; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.composer
    ADD CONSTRAINT fk_num_commande FOREIGN KEY (num_commande) REFERENCES public.commande(num_commande);


--
-- Name: composer fk_ref_produit; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.composer
    ADD CONSTRAINT fk_ref_produit FOREIGN KEY (ref_produit) REFERENCES public.produit(ref_produit);


--
-- Name: vend fk_ref_produit; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vend
    ADD CONSTRAINT fk_ref_produit FOREIGN KEY (ref_produit) REFERENCES public.produit(ref_produit);


--
-- Name: commentaire fk_ref_produit; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.commentaire
    ADD CONSTRAINT fk_ref_produit FOREIGN KEY (ref_produit) REFERENCES public.produit(ref_produit);


--
-- Name: note fk_ref_produit; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.note
    ADD CONSTRAINT fk_ref_produit FOREIGN KEY (ref_produit) REFERENCES public.produit(ref_produit);


--
-- Name: t_types_utilisateur fkkrfpks285p2n8ybt8y5f4xiui; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_types_utilisateur
    ADD CONSTRAINT fkkrfpks285p2n8ybt8y5f4xiui FOREIGN KEY (num) REFERENCES public.utilisateur(num);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: pg_database_owner
--

REVOKE ALL ON SCHEMA public FROM postgres;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO pg_database_owner;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

