import React from "react"
import { Link } from 'react-router-dom'

export default function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <Link class="navbar-brand" href="#">Navbar</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" href="#">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="#">Features</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="#">Pricing</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link disabled">Disabled</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}