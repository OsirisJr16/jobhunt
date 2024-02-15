--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

-- Started on 2024-02-15 22:15:48

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
    id_job integer NOT NULL,
    id_user integer NOT NULL,
    cover_letter text NOT NULL,
    application_date timestamp without time zone NOT NULL,
    resume character varying(255) NOT NULL
);


ALTER TABLE public.application OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 58161)
-- Name: jobs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.jobs (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description text NOT NULL,
    company character varying(255) NOT NULL,
    requirements text NOT NULL,
    salary integer NOT NULL,
    date_poste timestamp without time zone NOT NULL,
    entrepise_id integer NOT NULL
);


ALTER TABLE public.jobs OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 58154)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    role character varying(255) NOT NULL,
    pdp character varying(255)
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 3185 (class 2606 OID 58179)
-- Name: application application_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.application
    ADD CONSTRAINT application_pkey PRIMARY KEY (id_job);


--
-- TOC entry 3183 (class 2606 OID 58165)
-- Name: jobs jobs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jobs
    ADD CONSTRAINT jobs_pkey PRIMARY KEY (id);


--
-- TOC entry 3181 (class 2606 OID 58160)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 3187 (class 2606 OID 58180)
-- Name: application application_id_job_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.application
    ADD CONSTRAINT application_id_job_fkey FOREIGN KEY (id_job) REFERENCES public.jobs(id);


--
-- TOC entry 3188 (class 2606 OID 58185)
-- Name: application application_id_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.application
    ADD CONSTRAINT application_id_user_fkey FOREIGN KEY (id_user) REFERENCES public.users(id);


--
-- TOC entry 3186 (class 2606 OID 58168)
-- Name: jobs jobs_entrepise_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jobs
    ADD CONSTRAINT jobs_entrepise_id_fkey FOREIGN KEY (entrepise_id) REFERENCES public.users(id) NOT VALID;


-- Completed on 2024-02-15 22:15:49

--
-- PostgreSQL database dump complete
--
