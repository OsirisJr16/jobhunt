--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

-- Started on 2024-03-02 21:24:25

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
-- TOC entry 216 (class 1259 OID 58173)
-- Name: application; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.application (
    id integer NOT NULL,
    cover_letter text NOT NULL,
    application_date timestamp without time zone NOT NULL,
    job_id integer,
    user_id integer,
    resume text NOT NULL
);


ALTER TABLE public.application OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 66360)
-- Name: application_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.application_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.application_id_seq OWNER TO postgres;

--
-- TOC entry 3368 (class 0 OID 0)
-- Dependencies: 218
-- Name: application_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.application_id_seq OWNED BY public.application.id;


--
-- TOC entry 221 (class 1259 OID 66382)
-- Name: companies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.companies (
    "companyName" character varying(255) NOT NULL,
    "companyAddress" character varying(255) NOT NULL,
    "companyDescription" text NOT NULL,
    "userId" integer NOT NULL
);


ALTER TABLE public.companies OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 66420)
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
-- TOC entry 3369 (class 0 OID 0)
-- Dependencies: 222
-- Name: companies_userId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."companies_userId_seq" OWNED BY public.companies."userId";


--
-- TOC entry 215 (class 1259 OID 58161)
-- Name: jobs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.jobs (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    company character varying(255) NOT NULL,
    requirements text NOT NULL,
    salary integer NOT NULL,
    descirption text NOT NULL,
    date_post timestamp without time zone NOT NULL,
    entreprise_id integer
);


ALTER TABLE public.jobs OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 66362)
-- Name: jobs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.jobs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.jobs_id_seq OWNER TO postgres;

--
-- TOC entry 3370 (class 0 OID 0)
-- Dependencies: 219
-- Name: jobs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.jobs_id_seq OWNED BY public.jobs.id;


--
-- TOC entry 220 (class 1259 OID 66379)
-- Name: students; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.students (
    "StudentName" character varying(255),
    "StudentSchool" character varying(255),
    "StudentAddress" character varying(255),
    "studentDescription" text,
    "userId" integer NOT NULL
);


ALTER TABLE public.students OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 66433)
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
-- TOC entry 3371 (class 0 OID 0)
-- Dependencies: 223
-- Name: students_userId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."students_userId_seq" OWNED BY public.students."userId";


--
-- TOC entry 214 (class 1259 OID 58154)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    role character varying(255) NOT NULL,
    pdp character varying(255),
    "linkedinLink" character varying(255),
    "studentUserId" integer,
    "companyUserId" integer
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 66354)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- TOC entry 3372 (class 0 OID 0)
-- Dependencies: 217
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 3195 (class 2604 OID 66361)
-- Name: application id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.application ALTER COLUMN id SET DEFAULT nextval('public.application_id_seq'::regclass);


--
-- TOC entry 3197 (class 2604 OID 66421)
-- Name: companies userId; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.companies ALTER COLUMN "userId" SET DEFAULT nextval('public."companies_userId_seq"'::regclass);


--
-- TOC entry 3194 (class 2604 OID 66363)
-- Name: jobs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jobs ALTER COLUMN id SET DEFAULT nextval('public.jobs_id_seq'::regclass);


--
-- TOC entry 3196 (class 2604 OID 66434)
-- Name: students userId; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students ALTER COLUMN "userId" SET DEFAULT nextval('public."students_userId_seq"'::regclass);


--
-- TOC entry 3193 (class 2604 OID 66355)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 3213 (class 2606 OID 66428)
-- Name: companies PK_6d64e8c7527a9e4af83cc66cbf7; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.companies
    ADD CONSTRAINT "PK_6d64e8c7527a9e4af83cc66cbf7" PRIMARY KEY ("userId");


--
-- TOC entry 3211 (class 2606 OID 66441)
-- Name: students PK_e0208b4f964e609959aff431bf9; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT "PK_e0208b4f964e609959aff431bf9" PRIMARY KEY ("userId");


--
-- TOC entry 3199 (class 2606 OID 66445)
-- Name: users UQ_3008019cd8d3f80940649324382; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "UQ_3008019cd8d3f80940649324382" UNIQUE ("companyUserId");


--
-- TOC entry 3201 (class 2606 OID 66357)
-- Name: users UQ_97672ac88f789774dd47f7c8be3; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE (email);


--
-- TOC entry 3203 (class 2606 OID 66443)
-- Name: users UQ_ed1aee7a7682ca10116657e99df; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "UQ_ed1aee7a7682ca10116657e99df" UNIQUE ("studentUserId");


--
-- TOC entry 3209 (class 2606 OID 66359)
-- Name: application application_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.application
    ADD CONSTRAINT application_pkey PRIMARY KEY (id) INCLUDE (id);


--
-- TOC entry 3207 (class 2606 OID 58165)
-- Name: jobs jobs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jobs
    ADD CONSTRAINT jobs_pkey PRIMARY KEY (id);


--
-- TOC entry 3205 (class 2606 OID 58160)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 3214 (class 2606 OID 66461)
-- Name: users FK_3008019cd8d3f80940649324382; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "FK_3008019cd8d3f80940649324382" FOREIGN KEY ("companyUserId") REFERENCES public.companies("userId");


--
-- TOC entry 3217 (class 2606 OID 66369)
-- Name: application FK_42f0935cc814e694ed0e61fdece; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.application
    ADD CONSTRAINT "FK_42f0935cc814e694ed0e61fdece" FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 3220 (class 2606 OID 66451)
-- Name: companies FK_6d64e8c7527a9e4af83cc66cbf7; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.companies
    ADD CONSTRAINT "FK_6d64e8c7527a9e4af83cc66cbf7" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- TOC entry 3216 (class 2606 OID 66374)
-- Name: jobs FK_8003e2d4c5d251ad97832eeea09; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jobs
    ADD CONSTRAINT "FK_8003e2d4c5d251ad97832eeea09" FOREIGN KEY (entreprise_id) REFERENCES public.users(id);


--
-- TOC entry 3218 (class 2606 OID 66364)
-- Name: application FK_c67a88c0ec9a378c447df6a87ba; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.application
    ADD CONSTRAINT "FK_c67a88c0ec9a378c447df6a87ba" FOREIGN KEY (job_id) REFERENCES public.jobs(id);


--
-- TOC entry 3219 (class 2606 OID 66446)
-- Name: students FK_e0208b4f964e609959aff431bf9; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT "FK_e0208b4f964e609959aff431bf9" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- TOC entry 3215 (class 2606 OID 66456)
-- Name: users FK_ed1aee7a7682ca10116657e99df; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "FK_ed1aee7a7682ca10116657e99df" FOREIGN KEY ("studentUserId") REFERENCES public.students("userId");


-- Completed on 2024-03-02 21:24:25

--
-- PostgreSQL database dump complete
--
