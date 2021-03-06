import { useRouter } from 'next/router';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { getsingleissue } from '../../service/IssueAPi';
import Navbar from "../../components/Navbar.jsx"
import styleshome from "../../styles/Home.module.css"
import styles from "../../styles/DetailedIssue.module.css"
import Image from 'next/image';
import profilepic from "../../public/assets/profilepic.svg"

const Issuedetailed = (props) => {


    const [issuedetails, setissuedetails] = useState()



    useEffect(() => {

        setissuedetails(props.issuedetailed)

    }, [props.issuedetailed]);



    return (
        <>
            <div className={styleshome.container}>
                <Navbar />
            </div>

            <div className={styles.issuedetailed_parentcontainer}>
                <div className={styles.issuedetailed_subparentcontainer}>

                    <Image src={profilepic} width={180} height={180} />

                    <div className={styles.issuedetailed_textdiv}>
                        <h1 className={styles.issuedetailed_issuetitle}>{issuedetails?.title}</h1>
                        <p className={styles.issuedetailed_issuedesc}>{issuedetails?.description}</p>
                        <p className={styles.issuedetailed_issueauthor}>This issue was created by <span>{issuedetails?.author}</span> </p>
                    </div>

                </div>
            </div>

        </>
    )
}


export async function getServerSideProps(context) {
    const { slug } = context.query;
    const issuedetailed = await getsingleissue(slug)
    return {
        props: {
            issuedetailed: issuedetailed.data
        }
    }
}


export default Issuedetailed