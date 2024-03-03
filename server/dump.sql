--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

-- Started on 2024-03-03 22:58:20

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
-- TOC entry 214 (class 1259 OID 66495)
-- Name: application; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.application (
    id integer NOT NULL,
    cover_letter text NOT NULL,
    application_date timestamp without time zone NOT NULL,
    resume text NOT NULL,
    job_id integer,
    user_id integer
);


ALTER TABLE public.application OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 66510)
-- Name: application_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.application_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.application_id_seq OWNER TO postgres;

--
-- TOC entry 3362 (class 0 OID 0)
-- Dependencies: 219
-- Name: application_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.application_id_seq OWNED BY public.application.id;


--
-- TOC entry 215 (class 1259 OID 66498)
-- Name: companies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.companies (
    "userId" integer NOT NULL,
    "companyName" character varying(255) NOT NULL,
    "companyAddress" character varying(255) NOT NULL,
    "companyDescription" text NOT NULL
);


ALTER TABLE public.companies OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 66537)
-- Name: companies_userId_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."companies_userId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."companies_userId_seq" OWNER TO postgres;

--
-- TOC entry 3363 (class 0 OID 0)
-- Dependencies: 222
-- Name: companies_userId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."companies_userId_seq" OWNED BY public.companies."userId";


--
-- TOC entry 216 (class 1259 OID 66501)
-- Name: jobs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.jobs (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    descirption text NOT NULL,
    company character varying(255) NOT NULL,
    requirements text NOT NULL,
    salary integer NOT NULL,
    date_post timestamp without time zone NOT NULL,
    entreprise_id integer
);


ALTER TABLE public.jobs OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 66519)
-- Name: jobs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.jobs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.jobs_id_seq OWNER TO postgres;

--
-- TOC entry 3364 (class 0 OID 0)
-- Dependencies: 220
-- Name: jobs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.jobs_id_seq OWNED BY public.jobs.id;


--
-- TOC entry 217 (class 1259 OID 66504)
-- Name: students; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.students (
    "userId" integer NOT NULL,
    "StudentName" character varying(255),
    "StudentSchool" character varying(255),
    "StudentAddress" character varying(255),
    "studentDescription" text
);


ALTER TABLE public.students OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 66528)
-- Name: students_userId_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."students_userId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."students_userId_seq" OWNER TO postgres;

--
-- TOC entry 3365 (class 0 OID 0)
-- Dependencies: 221
-- Name: students_userId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."students_userId_seq" OWNED BY public.students."userId";


--
-- TOC entry 218 (class 1259 OID 66507)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    role character varying(255) NOT NULL,
    pdp character varying(255),
    "linkedinLink" character varying(255)
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 66546)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- TOC entry 3366 (class 0 OID 0)
-- Dependencies: 223
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 3193 (class 2604 OID 66511)
-- Name: application id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.application ALTER COLUMN id SET DEFAULT nextval('public.application_id_seq'::regclass);


--
-- TOC entry 3194 (class 2604 OID 66538)
-- Name: companies userId; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.companies ALTER COLUMN "userId" SET DEFAULT nextval('public."companies_userId_seq"'::regclass);


--
-- TOC entry 3195 (class 2604 OID 66520)
-- Name: jobs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jobs ALTER COLUMN id SET DEFAULT nextval('public.jobs_id_seq'::regclass);


--
-- TOC entry 3196 (class 2604 OID 66529)
-- Name: students userId; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students ALTER COLUMN "userId" SET DEFAULT nextval('public."students_userId_seq"'::regclass);


--
-- TOC entry 3197 (class 2604 OID 66547)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 3199 (class 2606 OID 66516)
-- Name: application PK_569e0c3e863ebdf5f2408ee1670; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.application
    ADD CONSTRAINT "PK_569e0c3e863ebdf5f2408ee1670" PRIMARY KEY (id);


--
-- TOC entry 3201 (class 2606 OID 66543)
-- Name: companies PK_6d64e8c7527a9e4af83cc66cbf7; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.companies
    ADD CONSTRAINT "PK_6d64e8c7527a9e4af83cc66cbf7" PRIMARY KEY ("userId");


--
-- TOC entry 3207 (class 2606 OID 66552)
-- Name: users PK_a3ffb1c0c8416b9fc6f907b7433; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY (id);


--
-- TOC entry 3203 (class 2606 OID 66525)
-- Name: jobs PK_cf0a6c42b72fcc7f7c237def345; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jobs
    ADD CONSTRAINT "PK_cf0a6c42b72fcc7f7c237def345" PRIMARY KEY (id);


--
-- TOC entry 3205 (class 2606 OID 66534)
-- Name: students PK_e0208b4f964e609959aff431bf9; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT "PK_e0208b4f964e609959aff431bf9" PRIMARY KEY ("userId");


--
-- TOC entry 3209 (class 2606 OID 66554)
-- Name: users UQ_97672ac88f789774dd47f7c8be3; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE (email);


--
-- TOC entry 3210 (class 2606 OID 66566)
-- Name: application FK_42f0935cc814e694ed0e61fdece; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.application
    ADD CONSTRAINT "FK_42f0935cc814e694ed0e61fdece" FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 3212 (class 2606 OID 66581)
-- Name: companies FK_6d64e8c7527a9e4af83cc66cbf7; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.companies
    ADD CONSTRAINT "FK_6d64e8c7527a9e4af83cc66cbf7" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- TOC entry 3213 (class 2606 OID 66571)
-- Name: jobs FK_8003e2d4c5d251ad97832eeea09; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jobs
    ADD CONSTRAINT "FK_8003e2d4c5d251ad97832eeea09" FOREIGN KEY (entreprise_id) REFERENCES public.users(id);


--
-- TOC entry 3211 (class 2606 OID 66561)
-- Name: application FK_c67a88c0ec9a378c447df6a87ba; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.application
    ADD CONSTRAINT "FK_c67a88c0ec9a378c447df6a87ba" FOREIGN KEY (job_id) REFERENCES public.jobs(id);


--
-- TOC entry 3214 (class 2606 OID 66576)
-- Name: students FK_e0208b4f964e609959aff431bf9; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT "FK_e0208b4f964e609959aff431bf9" FOREIGN KEY ("userId") REFERENCES public.users(id);


-- Completed on 2024-03-03 22:58:20

--
-- PostgreSQL database dump complete
--


INSERT INTO public.companies ("userId", "companyName", "companyAddress", "companyDescription") VALUES (1, 'My company', 'Fianarantsoa', 'My Company  offre des solutions de marketing digital sur mesure, propulsant votre entreprise vers le succès en ligne. Avec une équipe d''experts dévoués, nous maximisons votre visibilité et vos conversions pour vous aider à atteindre de nouveaux sommets.');
INSERT INTO public.companies ("userId", "companyName", "companyAddress", "companyDescription") VALUES (2, 'Mianava', 'Toamasina', 'Mianava offre des solutions de marketing digital sur mesure, propulsant votre entreprise vers le succès en ligne. Avec une équipe d''experts dévoués, nous maximisons votre visibilité et vos conversions pour vous aider à atteindre de nouveaux sommets.');


INSERT INTO public.users (id, email, password, role, pdp, "linkedinLink") VALUES (1, 'mycompany@gmail.com', 'comapny', 'company', NULL, NULL);
INSERT INTO public.users (id, email, password, role, pdp, "linkedinLink") VALUES (2, 'Mianava@gmail.com', 'Mianava', 'company', NULL, NULL);

