import React from "react";
import { Route, Routes } from "react-router-dom";
import { HeroScreen } from "../components/hero/HeroScreen";
import { Navbar } from "../components/ui/Navbar";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { DcScreen } from "../components/dc/DcScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { ErrorScreen } from "../components/error/ErrorScreen";

export const DashboardRoutes = () => {
	return (
		<>
			<Navbar />
			<div className="container mt-2">
				<Routes>
					<Route path="/" element={<MarvelScreen />} />
					<Route path="marvel" element={<MarvelScreen />} />
					<Route path="dc" element={<DcScreen />} />
					<Route path="search" element={<SearchScreen />} />
					<Route path="hero/:id" element={<HeroScreen />} />
					<Route path="/*" element={<ErrorScreen />} />
				</Routes>
			</div>
		</>
	);
};
