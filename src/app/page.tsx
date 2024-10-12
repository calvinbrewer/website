import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";
import { Paragraph } from "@deepdish/ui/typography";

export default function Page() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-3xl mx-auto">
				<header className="text-center mb-12">
					<h1 className="text-4xl font-bold text-gray-900 mb-2">CJ Brewer</h1>
					<Paragraph deepdish={{ key: "product-name" }}>Engineer</Paragraph>
				</header>

				<Card className="mb-8">
					<CardContent className="pt-6">
						<h2 className="text-2xl font-semibold mb-4">About Me</h2>
						<p className="text-gray-700">I do a lot of things.</p>
					</CardContent>
				</Card>

				<Card>
					<CardContent className="pt-6">
						<h2 className="text-2xl font-semibold mb-4">Contact</h2>
						<div className="space-y-2">
							<a
								href="mailto:cj.brewer@example.com"
								className="flex items-center text-blue-600 hover:text-blue-800"
							>
								<Mail className="mr-2 h-5 w-5" />
								cj@cjb.io
							</a>
							<a
								href="https://www.linkedin.com/in/brewercj/"
								className="flex items-center text-blue-600 hover:text-blue-800"
							>
								<Linkedin className="mr-2 h-5 w-5" />
								linkedin.com/in/brewercj
							</a>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
